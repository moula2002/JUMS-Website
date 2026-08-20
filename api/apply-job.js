import formidable from 'formidable';
import nodemailer from 'nodemailer';
import fs from 'fs';

// Disable default body parser to handle multipart/form-data with formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const form = formidable({ 
      maxFileSize: 4.5 * 1024 * 1024,
      uploadDir: '/tmp',
      keepExtensions: true
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form data:', err);
        return res.status(500).json({ success: false, message: 'Error processing upload.' });
      }

      // formidable v3 parses fields as arrays
      const getValue = (val) => Array.isArray(val) ? val[0] : val;

      const fullName = getValue(fields.fullName) || 'Not Provided';
      const email = getValue(fields.email) || 'Not Provided';
      const phone = getValue(fields.phone) || 'Not Provided';
      const experience = getValue(fields.experience) || 'Not Provided';
      const coverLetter = getValue(fields.coverLetter) || 'No cover letter';
      
      const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;

      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error('SMTP Configuration Error: Credentials are missing.');
        return res.status(500).json({ 
          success: false, 
          message: 'Server Configuration Error: SMTP credentials are missing.' 
        });
      }

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Inter', -apple-system, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
            .header { background-color: #1e3a8a; padding: 35px 30px; text-align: center; border-bottom: 4px solid #f59e0b; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; }
            .content { padding: 40px 35px; }
            .field { margin-bottom: 20px; border-bottom: 1px solid #f1f5f9; padding-bottom: 15px; }
            .label { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 700; margin-bottom: 5px; display: block; }
            .value { font-size: 16px; color: #0f172a; font-weight: 600; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>JUMS Corporate Solutions</h1>
              <p style="color: #cbd5e1; margin-top: 10px;">New Job Application</p>
            </div>
            <div class="content">
              <div class="field"><span class="label">Candidate Name</span><p class="value">${fullName}</p></div>
              <div class="field"><span class="label">Email</span><p class="value">${email}</p></div>
              <div class="field"><span class="label">Phone</span><p class="value">${phone}</p></div>
              <div class="field"><span class="label">Experience</span><p class="value">${experience}</p></div>
              <div class="field"><span class="label">Cover Letter</span><p class="value">${coverLetter}</p></div>
            </div>
          </div>
        </body>
        </html>
      `;

      const mailOptions = {
        from: `"JUMS Careers" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: process.env.SMTP_TO_ADMIN || process.env.SMTP_USER,
        subject: `New Job Application: ${fullName}`,
        html: htmlContent,
        attachments: []
      };

      if (resumeFile) {
        mailOptions.attachments.push({
          filename: resumeFile.originalFilename || resumeFile.name,
          path: resumeFile.filepath || resumeFile.path // depends on formidable version
        });
      }

      await transporter.sendMail(mailOptions);

      // We do not forward the file to the DB backend, just the metadata, 
      // since Render ephemeral disk would lose the file anyway and it's attached in the email.
      // Or we can construct a FormData to forward it. Let's just forward the text metadata.
      try {
        const jobId = Array.isArray(fields.id) ? fields.id[0] : fields.id;
        if (jobId) {
          await fetch(`https://jums-sever.onrender.com/api/jobs/${jobId}/apply`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, phone, experience, coverLetter, skipEmail: true })
          });
        }
      } catch (dbError) {
        console.error('Failed to log to database:', dbError);
      }

      return res.status(200).json({ success: true, message: 'Application sent successfully!' });
    });
  } catch (error) {
    console.error('Error in apply-job handler:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to process application.',
      error: error.message 
    });
  }
}

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const ApplyJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(null);

    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      if (resumeFile) data.append('resume', resumeFile);

      const API_URL = import.meta.env.VITE_API_URL || 'https://jums-sever.onrender.com';
      const response = await fetch(`${API_URL}/api/jobs/${id}/apply`, {
        method: 'POST',
        body: data
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed to submit application');
      
      setSubmitMessage({ type: 'success', text: 'Application submitted successfully! We will get back to you soon.' });
      setFormData({ fullName: '', email: '', phone: '', experience: '', coverLetter: '' });
      setResumeFile(null);
      e.target.reset(); // clear file input
    } catch (err) {
      setSubmitMessage({ type: 'error', text: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'https://jums-sever.onrender.com';
        const response = await fetch(`${API_URL}/api/jobs/${id}`);
        if (!response.ok) throw new Error('Job not found');
        const data = await response.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50"><p className="text-xl font-bold text-slate-500">Loading job details...</p></div>;
  }

  if (error || !job) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50"><p className="text-xl font-bold text-red-500">{error || 'Job not found'}</p></div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Apply for {job.title}</h1>
          <p className="text-gray-300 font-medium">Home <span className="mx-2">/</span> Jobs <span className="mx-2">/</span> Apply</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Application Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">Application Form</h3>

            {submitMessage && (
              <div className={`p-4 mb-6 rounded-lg font-medium text-sm ${submitMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {submitMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Experience</label>
                  <select name="experience" value={formData.experience} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent appearance-none bg-white text-slate-600">
                    <option value="">Select experience</option>
                    <option value="Fresher">Fresher (0 Years)</option>
                    <option value="0-2 Years">0-2 Years</option>
                    <option value="2-4 Years">2-4 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Resume</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center gap-4 bg-gray-50">
                  <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" required className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-accent file:text-white
                    hover:file:bg-accent-hover
                    cursor-pointer"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Cover Letter</label>
                <textarea name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} rows="4" placeholder="Write your cover letter..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"></textarea>
              </div>

              <button type="submit" disabled={submitting} className="bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-bold transition-colors w-full md:w-auto shadow-md">
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Summary */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-4 pb-4 border-b border-gray-100">Job Summary</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold overflow-hidden">
                  {job.companyLogo ? (
                    <img src={job.companyLogo} alt={job.companyName} className="w-full h-full object-cover" />
                  ) : (
                    <span>{job.title ? job.title.substring(0, 2).toUpperCase() : 'JOB'}</span>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{job.title}</h4>
                  <p className="text-xs text-slate-500">{job.companyName}</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-accent" /> {job.location}
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Clock className="w-4 h-4 text-accent" /> {job.type}
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Briefcase className="w-4 h-4 text-accent" /> {job.experience}
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-primary p-6 rounded-xl shadow-sm text-center text-white">
              <h3 className="text-xl font-bold mb-2">Can't find the right job?</h3>
              <p className="text-sm text-gray-300 mb-6">Send us your resume and we'll help you find the best opportunity.</p>
              <button className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-lg font-bold transition-colors w-full shadow-md">
                Upload Resume
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ApplyJob;

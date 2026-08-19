import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import faqImage from '../assets/images/faq_illustration.png';

const FAQs = () => {
  const [openId, setOpenId] = useState(1);

  const faqs = [
    {
      id: 1,
      question: 'What services does JUMS Corporate Services offer?',
      answer: 'We offer a comprehensive range of HR services including Recruitment Solutions, Staffing Solutions (Contract & Permanent), HR Consulting, Payroll Management, and Training & Development programs.'
    },
    {
      id: 2,
      question: 'How do you ensure data security?',
      answer: 'We adhere to strict data protection regulations and use industry-standard encryption and secure servers to ensure all client and employee data is kept strictly confidential and secure.'
    },
    {
      id: 3,
      question: 'What industries do you serve?',
      answer: 'We serve a diverse range of industries including IT/ITES, Healthcare, Manufacturing, Retail, Finance, and Education, tailoring our HR solutions to meet the specific needs of each sector.'
    },
    {
      id: 4,
      question: 'How can I apply for a job?',
      answer: 'You can visit our Jobs Portal to browse current openings. Click on the job you are interested in and use the "Apply Now" button to submit your resume and cover letter directly through our website.'
    },
    {
      id: 5,
      question: 'Can you help with hiring for niche roles?',
      answer: 'Yes, our specialized recruitment team has extensive experience and networks to source and place top talent for highly specialized and niche roles across various industries.'
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/faqs-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">FAQs</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> FAQs</p>
          </div>
          <div>
            <p className="text-gray-300 max-w-md text-sm leading-relaxed border-l-2 border-accent pl-4">
              Find answers to common questions about our recruitment, staffing, and compliance services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Illustration Left Side */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
              {/* Visual representation of the FAQ illustration */}
              <div className="relative bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-xl flex flex-col items-center text-center">
                <img src={faqImage} alt="FAQ Illustration" className="w-full max-w-[280px] object-contain mb-8 rounded-2xl bg-gray-50/50 mix-blend-multiply" />
                <h3 className="text-2xl font-bold text-primary mb-2">Still have questions?</h3>
                <p className="text-slate-500 mb-6 text-sm">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                <button className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-full font-bold transition-colors w-full shadow-md text-sm">
                  Get in touch
                </button>
              </div>
            </div>
          </div>

          {/* Accordion Right Side */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`border-b border-gray-200 transition-all duration-300 ${openId === faq.id ? 'pb-4' : ''}`}
              >
                <button
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span className={`font-bold text-sm md:text-base pr-8 ${openId === faq.id ? 'text-accent' : 'text-primary group-hover:text-accent transition-colors'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'text-accent' : 'text-slate-400'}`}>
                    {openId === faq.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-500 text-sm leading-relaxed pr-8 pb-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default FAQs;

import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock } from 'lucide-react';

const ApplyJob = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary pt-16 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Apply for HR Executive</h1>
          <p className="text-gray-300 font-medium">Home <span className="mx-2">/</span> Jobs <span className="mx-2">/</span> Apply</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Application Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-4">Application Form</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Experience</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent appearance-none bg-white text-slate-600">
                    <option>Select experience</option>
                    <option>0-2 Years</option>
                    <option>2-4 Years</option>
                    <option>5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Resume</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center gap-4 bg-gray-50">
                  <input type="file" className="block w-full text-sm text-slate-500
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
                <textarea rows="4" placeholder="Write your cover letter..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"></textarea>
              </div>

              <button type="button" className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-bold transition-colors w-full md:w-auto shadow-md">
                Submit Application
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Summary */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-4 pb-4 border-b border-gray-100">Job Summary</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                  HR
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">HR Executive</h4>
                  <p className="text-xs text-slate-500">JUMS Corporate Services Pvt Ltd</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-accent" /> Chennai
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Clock className="w-4 h-4 text-accent" /> Full Time
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Briefcase className="w-4 h-4 text-accent" /> 2-4 Years
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

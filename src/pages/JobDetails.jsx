import { Link, useParams } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Calendar, Heart, CheckCircle2, Shield, Plane, TrendingUp } from 'lucide-react';

const JobDetails = () => {
  const { id } = useParams();

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/jobs-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Job Details</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> Jobs <span className="mx-2 text-gray-600">/</span> HR Executive</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">

          {/* Job Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-gray-100 pb-8 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">HR Executive</h2>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Chennai</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Full Time</span>
                <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> 2-4 Years Experience</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Posted 2 Days Ago</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link to={`/jobs/${id || '1'}/apply`} className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-md text-sm">
                Apply Now
              </Link>
              <button className="flex items-center justify-center px-6 border border-gray-200 text-slate-600 font-bold hover:text-accent hover:border-accent rounded-xl transition-colors text-sm">
                Save Job
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content (Left) */}
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Job Description</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  We are looking for a dynamic HR Executive to join our team. You will be responsible for managing HR functions and ensuring smooth HR operations.
                </p>
                <ul className="space-y-3">
                  {[
                    'Manage end-to-end recruitment process',
                    'Maintain employee records and HR database',
                    'Coordinate with departments for HR requirements',
                    'Ensure compliance with company policies'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {[
                    "Bachelor's degree in HR or related field",
                    "2-4 years of experience in HR role",
                    "Good communication and interpersonal skills",
                    "Proficiency in MS Office"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Benefits</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="border border-gray-100 p-4 rounded-xl flex flex-col items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-700 text-xs">Health Insurance</span>
                  </div>
                  <div className="border border-gray-100 p-4 rounded-xl flex flex-col items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-700 text-xs">Provident Fund</span>
                  </div>
                  <div className="border border-gray-100 p-4 rounded-xl flex flex-col items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <Plane className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-700 text-xs">Paid Leave</span>
                  </div>
                  <div className="border border-gray-100 p-4 rounded-xl flex flex-col items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-700 text-xs">Career Growth</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar (Right) */}
            <div className="space-y-6">

              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
                <h3 className="text-lg font-bold text-primary mb-6">Job Summary</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-slate-500 text-sm">Job Title</span>
                    <span className="font-semibold text-slate-800 text-sm">HR Executive</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-slate-500 text-sm">Job Type</span>
                    <span className="font-semibold text-slate-800 text-sm">Full Time</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-slate-500 text-sm">Experience</span>
                    <span className="font-semibold text-slate-800 text-sm">2-4 Years</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-slate-500 text-sm">Location</span>
                    <span className="font-semibold text-slate-800 text-sm">Chennai</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-slate-500 text-sm">Salary</span>
                    <span className="font-semibold text-slate-800 text-sm">₹3L - ₹5L</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-500 text-sm">Industry</span>
                    <span className="font-semibold text-slate-800 text-sm">Corporate Services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
                <h3 className="text-lg font-bold text-primary mb-4">Share Job</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-colors shadow-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default JobDetails;

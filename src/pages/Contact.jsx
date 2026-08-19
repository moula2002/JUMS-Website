import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
          <FadeIn direction="up">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-4">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">Get In Touch</h1>
            <p className="text-white/80 font-medium text-sm flex items-center gap-2">
              <span className="hover:text-white transition-colors cursor-pointer">Home</span> 
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> 
              <span className="text-white">Contact Us</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-md shadow-2xl">
              <p className="text-white text-sm leading-relaxed">
                Have a question or need assistance with your HR operations? Our dedicated talent acquisition team is ready to help you drive your business forward.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left Side: Map and Contact Details */}
            <FadeIn direction="right" className="space-y-8">
              {/* Map Container */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-[350px] shadow-lg relative border border-gray-100 group">
                <img
                  src="/images/contact-map.jpg"
                  alt="Bengaluru Office Location"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                
                {/* Map Controls Mockup */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg flex text-xs font-bold border border-white/50 overflow-hidden transform-gpu hover:scale-105 transition-transform cursor-pointer">
                  <div className="px-4 py-2 bg-primary text-white">Map</div>
                  <div className="px-4 py-2 text-primary hover:bg-gray-50 transition-colors">Satellite</div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-xl text-xs font-bold text-primary mb-2 animate-bounce">Bengaluru HQ</div>
                  <div className="relative">
                    <MapPin className="w-10 h-10 fill-accent text-white drop-shadow-xl relative z-10" />
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-40"></div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-black text-primary text-2xl mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-accent rounded-full"></span>
                  Contact Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                        <span className="text-sm text-primary font-bold">+91 80 4123 5678</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                        <span className="text-sm text-primary font-bold">contact@jumshrs.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Visit Us</p>
                        <span className="text-sm text-slate-600 font-medium leading-relaxed block">Level 4, Corporate Tech Park,<br />MG Road, Bengaluru 560001</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Side: Form and Socials */}
            <FadeIn delay={0.2} direction="left" className="space-y-8">
              {/* Form Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="mb-8">
                  <h3 className="font-black text-primary text-3xl mb-2">Send a Message</h3>
                  <p className="text-slate-500 text-sm">We typically respond within 2 hours during business days.</p>
                </div>
                
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        placeholder=" "
                        className="peer w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all duration-300"
                      />
                      <label htmlFor="fullName" className="absolute left-4 top-3.5 text-slate-400 text-sm transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-accent peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2 cursor-text">Full Name</label>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        placeholder=" "
                        className="peer w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all duration-300"
                      />
                      <label htmlFor="company" className="absolute left-4 top-3.5 text-slate-400 text-sm transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-accent peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2 cursor-text">Company Name</label>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        placeholder=" "
                        className="peer w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all duration-300"
                      />
                      <label htmlFor="email" className="absolute left-4 top-3.5 text-slate-400 text-sm transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-accent peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2 cursor-text">Email Address</label>
                    </div>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        placeholder=" "
                        className="peer w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all duration-300"
                      />
                      <label htmlFor="phone" className="absolute left-4 top-3.5 text-slate-400 text-sm transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-accent peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2 cursor-text">Phone Number</label>
                    </div>
                  </div>
                  <div className="relative">
                    <select id="service" defaultValue="" className="peer w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all duration-300 text-slate-600 appearance-none">
                      <option value="" disabled hidden></option>
                      <option value="recruitment">Recruitment & Staffing</option>
                      <option value="consulting">HR Consulting</option>
                      <option value="payroll">Payroll Services</option>
                      <option value="compliance">Compliance Services</option>
                    </select>
                    <label htmlFor="service" className="absolute left-4 top-3.5 text-slate-400 text-sm transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-accent peer-valid:-top-2.5 peer-valid:text-xs peer-valid:bg-white peer-valid:px-2 cursor-pointer pointer-events-none">Service Required</label>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      placeholder=" "
                      rows="4"
                      className="peer w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all duration-300 resize-none"
                    ></textarea>
                    <label htmlFor="message" className="absolute left-4 top-3.5 text-slate-400 text-sm transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-accent peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-2 cursor-text">How can we help you?</label>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-accent hover:to-accent-hover text-white px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-accent/30 hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

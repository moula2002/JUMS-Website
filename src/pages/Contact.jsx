import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
          <FadeIn direction="none">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> Contact Us</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <p className="text-gray-300 max-w-md text-sm leading-relaxed border-l-2 border-accent pl-4">
              Have a question or need assistance with your HR operations? Our dedicated talent acquisition team is ready to help you.
            </p>
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
              <div className="bg-gray-100 rounded-lg overflow-hidden h-[300px] shadow-sm relative border border-gray-200">
                <img
                  src="/images/contact-map.jpg"
                  alt="Bengaluru Office Location"
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                />
                {/* Map Controls Mockup */}
                <div className="absolute top-4 left-4 bg-white rounded shadow flex text-xs font-medium">
                  <div className="px-3 py-1.5 border-r border-gray-200">Map</div>
                  <div className="px-3 py-1.5 text-gray-500">Satellite</div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent">
                  <MapPin className="w-8 h-8 fill-accent text-white drop-shadow-md" />
                  <div className="bg-white px-2 py-1 rounded shadow-md text-xs font-bold text-primary absolute -top-8 left-1/2 -translate-x-1/2">Bengaluru</div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="font-bold text-primary text-lg mb-4">Contact Details</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm text-slate-600 font-medium">+91 80 4123 5678</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm text-slate-600 font-medium">contact@jumshrs.com</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-primary mt-1" />
                      <span className="text-sm text-slate-600 font-medium">Monday - Friday<br />9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-slate-600 font-medium leading-relaxed">Level 4, Corporate Tech Park,<br />MG Road, Bengaluru,<br />Karnataka 560001, India</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Side: Form and Socials */}
            <FadeIn delay={0.2} direction="left" className="space-y-8">
              {/* Form Card */}
              <div className="bg-white border-2 border-primary rounded-xl p-8 shadow-sm">
                <h3 className="font-bold text-primary text-lg mb-6">Contact</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <select className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-slate-600">
                    <option value="">Service Required</option>
                    <option value="recruitment">Recruitment & Staffing</option>
                    <option value="consulting">HR Consulting</option>
                    <option value="payroll">Payroll Services</option>
                    <option value="compliance">Compliance Services</option>
                  </select>
                  <textarea
                    placeholder="Message"
                    rows="5"
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                  ></textarea>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-accent hover:bg-accent-hover text-white px-8 py-2.5 rounded-md font-bold text-sm transition-colors w-full sm:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-primary text-lg mb-4">Social Media Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

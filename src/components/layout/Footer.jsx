import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Company Info & Logo */}
          <div className="lg:col-span-4 lg:pr-8">
            <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-md">
              <img src={logo} alt="JUMS Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Empowering businesses with innovative HR services, talent acquisition, workforce management, and compliance support to build stronger, more productive teams.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent border border-white/10 flex items-center justify-center text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent border border-white/10 flex items-center justify-center text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent border border-white/10 flex items-center justify-center text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-white border-l-4 border-accent pl-3">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Our Services</Link></li>
              <li><Link to="/jobs" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 text-white border-l-4 border-accent pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">Company Headquarters<br/>Address, City, State</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@company.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-400 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 text-white border-l-4 border-accent pl-3">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Subscribe to receive the latest HR insights, news, and updates directly to your inbox.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-accent focus:bg-white/10 transition-all"
                />
              </div>
              <button 
                type="button" 
                className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-lg transition-colors text-sm flex justify-center items-center gap-2 shadow-lg shadow-accent/20"
              >
                Subscribe Now <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} JUMS Corporate Services Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, CheckSquare, Shield } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger';

const Services = () => {
  const services = [
    { title: 'Recruitment Solutions', desc: 'End-to-end recruitment services to find the right talent.' },
    { title: 'Staffing Solutions', desc: 'Flexible staffing solutions to meet your business needs.' },
    { title: 'HR Consulting', desc: 'Strategic HR consulting to improve performance.' },
    { title: 'Payroll Management', desc: 'Accurate & timely payroll processing with 100% compliance.' },
    { title: 'Compliance Management', desc: 'Ensure legal compliance and reduce business risks.' },
    { title: 'Training & Development', desc: 'Empower your employees with the right skills.' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
          <FadeIn direction="none">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> Services</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <p className="text-gray-300 max-w-md text-sm leading-relaxed border-l-2 border-accent pl-4">
              Comprehensive human resource solutions designed to empower your organization and scale your workforce efficiently.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">

            {/* Card 1: Recruitment & Staffing */}
            <StaggerItem>
              <div className="bg-white border border-gray-200 rounded-xl rounded-tl-[40px] p-8 h-full flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                <div>
                  <div className="flex items-center mb-6 ml-2 mt-2">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-bold text-primary text-2xl mb-2 ml-2">Recruitment & Staffing</h3>
                  <p className="text-slate-500 text-sm ml-2 mb-5 leading-relaxed pr-4">Discover exceptional talent with our precision-driven recruitment strategies tailored to your unique company culture.</p>
                  <ul className="space-y-3 ml-2 mb-8">
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-accent rounded-full"></div>Permanent Staffing</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-accent rounded-full"></div>Temporary Staffing</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-accent rounded-full"></div>Contract Staffing</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-accent rounded-full"></div>Bulk Hiring</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-accent rounded-full"></div>Campus Recruitment</li>
                  </ul>
                </div>
                <Link to="/contact" className="text-primary font-bold text-sm flex items-center ml-2 hover:text-accent transition-colors">Request Service &gt;</Link>
              </div>
            </StaggerItem>

            {/* Card 2: HR Consulting */}
            <StaggerItem>
              <div className="bg-white border border-gray-200 rounded-xl rounded-tl-[40px] p-8 h-full flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
                <div>
                  <div className="flex items-center mb-6 ml-2 mt-2">
                    <div className="w-12 h-12 bg-accent/5 rounded-full flex items-center justify-center text-accent">
                      <Briefcase className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-bold text-primary text-2xl mb-2 ml-2">HR Consulting</h3>
                  <p className="text-slate-500 text-sm ml-2 mb-5 leading-relaxed pr-4">Strategic consulting services to align your human resources with your long-term business objectives and growth plans.</p>
                  <ul className="space-y-3 ml-2 mb-8">
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-primary rounded-full"></div>HR Policy Development</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-primary rounded-full"></div>Organizational Design</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-primary rounded-full"></div>Workforce Planning</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-primary rounded-full"></div>Employee Engagement</li>
                  </ul>
                </div>
                <Link to="/contact" className="text-accent font-bold text-sm flex items-center ml-2 hover:text-primary transition-colors">Request Service &gt;</Link>
              </div>
            </StaggerItem>

            {/* Card 3: Payroll Services */}
            <StaggerItem>
              <div className="bg-white border border-gray-200 rounded-xl rounded-tl-[40px] p-8 h-full flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                <div>
                  <div className="flex items-center mb-6 ml-2 mt-2">
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                      <CheckSquare className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-bold text-primary text-2xl mb-2 ml-2">Payroll Services</h3>
                  <p className="text-slate-500 text-sm ml-2 mb-5 leading-relaxed pr-4">Streamline your financial operations with our accurate, timely, and fully compliant payroll management systems.</p>
                  <ul className="space-y-3 ml-2 mb-8">
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-accent rounded-full"></div>Salary Processing</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-accent rounded-full"></div>Tax Management</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-accent rounded-full"></div>Benefits Administration</li>
                  </ul>
                </div>
                <Link to="/contact" className="text-primary font-bold text-sm flex items-center ml-2 hover:text-accent transition-colors">Request Service &gt;</Link>
              </div>
            </StaggerItem>

            {/* Card 4: Compliance Services */}
            <StaggerItem>
              <div className="bg-white border border-gray-200 rounded-xl rounded-tl-[40px] p-8 h-full flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
                <div>
                  <div className="flex items-center mb-6 ml-2 mt-2">
                    <div className="w-12 h-12 bg-accent/5 rounded-full flex items-center justify-center text-accent">
                      <Shield className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-bold text-primary text-2xl mb-2 ml-2">Compliance Services</h3>
                  <p className="text-slate-500 text-sm ml-2 mb-5 leading-relaxed pr-4">Navigate complex employment laws effortlessly. We ensure your business is protected against legal risks and penalties.</p>
                  <ul className="space-y-3 ml-2 mb-8">
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-primary rounded-full"></div>Labor Law Compliance</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-primary rounded-full"></div>Documentation Support</li>
                    <li className="flex items-center gap-3 text-slate-600"><div className="w-2 h-2 bg-primary rounded-full"></div>Audit Assistance</li>
                  </ul>
                </div>
                <Link to="/contact" className="text-accent font-bold text-sm flex items-center ml-2 hover:text-primary transition-colors">Request Service &gt;</Link>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* Custom HR Solution CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <FadeIn className="bg-primary rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom HR Solution?</h2>
            <p className="text-gray-400">We are here to help you with customized solutions for your business.</p>
          </div>
          <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold transition-colors whitespace-nowrap shadow-lg shadow-accent/20">
            Contact Us
          </Link>
        </FadeIn>
      </section>
    </div>
  );
};

export default Services;

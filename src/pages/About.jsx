import { Link } from 'react-router-dom';
import { Shield, Star, Users, Lightbulb, HeartHandshake, Briefcase, CheckSquare, Clock, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger';

const About = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/about-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <FadeIn direction="none">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> About Us</p>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgb(0,0,0,0.05)] p-12 lg:p-16 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Content */}
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
                  Pioneering Excellence in Human Resources
                </h2>
                <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                  <p className="text-base text-slate-700 leading-relaxed mb-6">
                    <strong>JUMS Corporate Services Pvt Ltd</strong> was founded on a singular principle: to transform the way organizations discover, manage, and nurture their talent. For over a decade, we have been the silent engine behind the success of numerous industry leaders and dynamic startups alike.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed mb-8">
                    Our comprehensive suite of HR solutions is designed not just to fill vacancies, but to build resilient, high-performing cultures that drive long-term business growth.
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Our Core Values</h3>
                    <p className="mb-4">We are driven by a set of core values that shape everything we do:</p>
                    <ul className="grid grid-cols-2 gap-2 mt-3">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>Integrity</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>Excellence</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>Innovation</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>Collaboration</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>Accountability</li>
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Right Graphic */}
              <FadeIn delay={0.2} direction="left" className="relative flex justify-center items-center py-8">
                <div className="relative w-full max-w-[400px] aspect-square">
                  {/* Center Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <Users className="w-16 h-16 text-primary mb-2" strokeWidth={1} />
                    <div className="w-8 h-8 rounded-full border-4 border-accent relative -mt-4 bg-white z-10 flex items-center justify-center">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                    </div>
                  </div>

                  {/* Left Node (Company Values) */}
                  <div className="absolute top-1/3 left-0 flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center mb-2 border border-gray-100 relative">
                      <Star className="w-6 h-6 text-primary" />
                      <div className="absolute -bottom-1 w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-xs font-bold text-primary">Company<br />Values</span>
                  </div>

                  {/* Right Node (Employee Companys) */}
                  <div className="absolute top-1/3 right-0 flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center mb-2 border border-gray-100 relative">
                      <Briefcase className="w-6 h-6 text-accent" />
                      <div className="absolute -bottom-1 w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-xs font-bold text-primary">Employee<br />Companys</span>
                  </div>

                  {/* Bottom Node (Leadership) */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-2 border border-gray-100 relative">
                      <Users className="w-10 h-10 text-primary" />
                      <div className="absolute top-0 right-0 w-3 h-3 bg-accent rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-xs font-bold text-primary mt-2">Leadership</span>
                  </div>

                  {/* Connecting lines - visual approximation */}
                  <svg className="absolute inset-0 w-full h-full -z-10 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M50 50 L20 35 M50 50 L80 35 M50 50 L50 80" stroke="#0A2A66" strokeWidth="1" strokeDasharray="4 2" />
                  </svg>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT COMPANY SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-[40px] p-12 lg:p-20 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

            <FadeIn>
              <div className="grid md:grid-cols-2 gap-8 text-left relative z-10">
                <div className="bg-white/15 p-8 rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-6 shadow-lg shadow-accent/30">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    To empower organizations through innovative HR solutions. We are dedicated to providing strategic talent acquisition, payroll management, and compliance support that drives sustainable business growth.
                  </p>
                </div>
                <div className="bg-white/15 p-8 rounded-2xl border border-white/20 hover:bg-white/25 transition-all duration-300">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-6 shadow-lg shadow-accent/30">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    To become the most trusted global HR partner. We envision a future where our expertise seamlessly connects top talent with visionary companies, fostering excellence and integrity worldwide.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Timeline Content */}
            <FadeIn className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="flex gap-8 relative z-10">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-primary mb-2">2010</span>
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                </div>
                <div className="pt-10 pb-8">
                  <h3 className="text-xl font-bold text-accent mb-4">The Foundation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    JUMS Corporate Services was established with a clear mission: to bridge the gap between exceptional talent and visionary companies in a rapidly evolving market.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 relative z-10">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-primary mb-2">2018</span>
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                </div>
                <div className="pt-10 pb-8">
                  <h3 className="text-xl font-bold text-accent mb-4">National Expansion</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We scaled our operations across major corporate hubs, establishing ourselves as a premier recruitment and payroll partner for enterprise clients.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 relative z-10">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-primary mb-2">2026</span>
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm ring-1 ring-gray-200"></div>
                </div>
                <div className="pt-10">
                  <h3 className="text-xl font-bold text-accent mb-4">Global HR Partner</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Today, we offer end-to-end strategic HR consulting, compliance, and workforce management solutions on a global scale.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Timeline Image */}
            <FadeIn delay={0.2} direction="left">
              <div className="rounded-xl overflow-hidden shadow-lg h-[250px]">
                <img
                  src="/images/about-who.jpg"
                  alt="Corporate Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
      {/* Leadership Team Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Leadership Team</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">Meet the experienced professionals guiding our vision and ensuring excellence in every HR solution we deliver.</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Arindam Sharma", role: "Founder & Managing Director", image: "/images/team-1.jpg" },
              { name: "Priya Desai", role: "Head of Talent Acquisition", image: "/images/team-2.jpg" },
              { name: "Rajesh Kumar", role: "Director of Payroll & Compliance", image: "/images/team-3.jpg" },
              { name: "Sneha Iyer", role: "Chief Strategy Officer", image: "/images/team-4.jpg" }
            ].map((member, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                  <div className="h-64 overflow-hidden relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-accent text-sm font-semibold">{member.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default About;

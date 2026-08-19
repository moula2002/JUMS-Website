import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, CheckSquare, Shield, Star, Lightbulb, HeartHandshake, CheckCircle2, TrendingUp, Target, Award, Monitor, Settings, Clock, Quote } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger';

const Home = () => {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gray-50/50 pt-12 lg:pt-16 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <FadeIn delay={0.1} className="z-10 relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] mb-6 tracking-tight">
                Transforming Human Resources with Smart Workforce Solutions
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                Empowering businesses with innovative HR services, talent acquisition, workforce management, payroll solutions, compliance support, and employee development programs.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/contact" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-bold transition-colors shadow-lg shadow-accent/30 text-lg flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-md font-bold transition-colors text-lg">
                  Book a Consultation
                </Link>
              </div>
            </FadeIn>

            {/* Right Side: Image and Stats */}
            <FadeIn delay={0.3} direction="left" className="relative">
              <div className="relative z-10 w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                <img 
                  src="/images/solution-contract.jpg" 
                  alt="Business Meeting" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Stats Overlay */}
                <div className="absolute inset-0 bg-primary/40 p-6 flex flex-col justify-end">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/95 p-4 rounded-xl border border-white/50">
                      <p className="text-3xl font-extrabold text-accent">500+</p>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">Companies Served</p>
                    </div>
                    <div className="bg-white/95 p-4 rounded-xl border border-white/50">
                      <p className="text-3xl font-extrabold text-accent">10,000+</p>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">Candidates Placed</p>
                    </div>
                    <div className="bg-white/95 p-4 rounded-xl border border-white/50">
                      <p className="text-3xl font-extrabold text-accent">15+</p>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">Years Experience</p>
                    </div>
                    <div className="bg-white/95 p-4 rounded-xl border border-white/50">
                      <p className="text-3xl font-extrabold text-accent">98%</p>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* 3. OUR SERVICES SECTION */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Services</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Recruitment & Staffing", desc: "Find top talent quickly through our extensive recruitment network." },
              { icon: Star, title: "Executive Search", desc: "Hire leadership professionals who drive business success." },
              { icon: CheckSquare, title: "Payroll Management", desc: "Accurate and timely payroll processing with complete compliance." },
              { icon: Briefcase, title: "HR Consulting", desc: "Strategic HR guidance tailored to your business goals." },
              { icon: TrendingUp, title: "Employee Training", desc: "Upskill your workforce with customized training programs." },
              { icon: Shield, title: "Compliance Management", desc: "Stay compliant with labor laws and regulations." },
              { icon: Target, title: "Performance Management", desc: "Improve productivity through structured evaluation systems." },
              { icon: HeartHandshake, title: "Workforce Outsourcing", desc: "Flexible staffing solutions for temporary and permanent requirements." }
            ].map((service, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full group relative overflow-hidden transform-gpu will-change-transform">
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent transform-gpu origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 will-change-transform"></div>
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Why Choose Us</h2>
              <p className="text-slate-600 text-lg mb-10">Partner with an industry leader dedicated to optimizing your human capital and driving organizational success.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Professional HR Experts", desc: "Experienced consultants with industry expertise." },
                  { title: "Fast Hiring Process", desc: "Reduce hiring time with streamlined recruitment strategies." },
                  { title: "Compliance Assurance", desc: "Ensure legal compliance and risk management." },
                  { title: "Customized Solutions", desc: "HR services designed specifically for your business." },
                  { title: "Advanced Technology", desc: "Modern HR tools and workforce analytics." },
                  { title: "Dedicated Support", desc: "Continuous support from our HR specialists." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left" className="relative h-full transform-gpu will-change-transform">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]">
                <img src="/images/about-who.jpg" alt="Team collaborating" className="w-full h-full object-cover transform-gpu" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none transform-gpu"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Information Technology", 
              "Healthcare & Medical", 
              "Manufacturing & Engineering", 
              "Banking & Financial Services", 
              "Retail & FMCG", 
              "Logistics & Supply Chain"
            ].map((industry, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/15 border border-white/20 p-6 rounded-xl text-center hover:bg-accent hover:border-accent transition-colors duration-300 cursor-pointer h-full flex items-center justify-center transform-gpu hover:scale-105">
                  <h4 className="font-bold text-sm lg:text-base">{industry}</h4>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. RECRUITMENT PROCESS */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Recruitment Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our streamlined 6-step process ensures we find the perfect match for your organizational needs.</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Requirement Analysis" },
              { step: "02", title: "Talent Sourcing" },
              { step: "03", title: "Candidate Screening" },
              { step: "04", title: "Interview Coordination" },
              { step: "05", title: "Selection & Offer" },
              { step: "06", title: "Onboarding Support" }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
                  <div className="text-6xl font-black text-gray-100 absolute -bottom-4 -right-2 group-hover:text-accent/10 transition-colors z-0">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <span className="inline-block bg-accent text-white font-bold px-3 py-1 rounded-full text-xs mb-4">Step {item.step}</span>
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. SUCCESS METRICS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-100 py-16">
            {[
              { value: "95%", label: "Successful Placements" },
              { value: "72 Hrs", label: "Avg. Candidate Shortlisting" },
              { value: "98%", label: "Client Retention Rate" },
              { value: "90%", label: "Employee Retention Improvement" }
            ].map((metric, i) => (
              <StaggerItem key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-black text-accent mb-2">{metric.value}</p>
                <p className="text-sm font-bold text-primary uppercase tracking-wide">{metric.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Client Testimonials</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", quote: "Exceptional recruitment services and highly professional support." },
              { name: "Michael Brown", quote: "Their HR solutions significantly improved our workforce management." },
              { name: "David Wilson", quote: "Fast hiring process and quality candidates every time." }
            ].map((testimonial, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative mt-8">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-lg">
                    <Quote className="w-6 h-6 fill-current" />
                  </div>
                  <p className="text-slate-600 italic mb-6 mt-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">{testimonial.name}</h4>
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. FEATURED CLIENTS */}
      <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trusted By</p>
        </div>
        <div className="flex space-x-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap opacity-50 grayscale hover:grayscale-0 transition-colors duration-500 transform-gpu will-change-transform">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-12 items-center">
              <span className="text-3xl font-black text-gray-400">CORPORATE</span>
              <span className="text-3xl font-black text-gray-400">STARTUP PARTNERS</span>
              <span className="text-3xl font-black text-gray-400">ENTERPRISE</span>
              <span className="text-3xl font-black text-gray-400">GOVERNMENT</span>
            </div>
          ))}
        </div>
      </section>

      {/* 10. LATEST BLOG SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Latest Insights</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Top HR Trends for Modern Businesses",
              "Effective Employee Retention Strategies",
              "Importance of Payroll Compliance",
              "Building High-Performance Teams"
            ].map((title, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer h-full flex flex-col">
                  <div className="h-40 bg-gray-200 overflow-hidden transform-gpu">
                    <img src={['/images/blog-1.jpg', '/images/blog-2.jpg', '/images/blog-3.jpg', '/images/blog-4.jpg'][i]} alt="Blog thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-accent text-xs font-bold uppercase mb-2">HR Insights</p>
                      <h3 className="font-bold text-primary leading-tight mb-4 group-hover:text-accent transition-colors">{title}</h3>
                    </div>
                    <span className="text-sm text-slate-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Read Article <ArrowRight className="w-4 h-4" /></span>
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

export default Home;

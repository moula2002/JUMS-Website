import { Monitor, HeartPulse, Building2, Landmark, ShoppingBag, Truck, ChevronRight } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger';

const Industries = () => {
  const industries = [
    {
      id: 1,
      name: 'Information Technology',
      icon: Monitor,
      desc: 'Top-tier tech talent for software development, IT infrastructure, cloud engineering, and cybersecurity.',
      image: '/images/industry-it.jpg'
    },
    {
      id: 2,
      name: 'Healthcare & Medical',
      icon: HeartPulse,
      desc: 'Specialized medical professionals, administration staff, and pharmaceutical experts to elevate patient care.',
      image: '/images/industry-health.jpg'
    },
    {
      id: 3,
      name: 'Manufacturing & Engineering',
      icon: Building2,
      desc: 'Skilled engineers, floor managers, and technical specialists to drive your production forward.',
      image: '/images/industry-mfg.jpg'
    },
    {
      id: 4,
      name: 'Banking & Financial Services',
      icon: Landmark,
      desc: 'Financial analysts, compliance officers, and accounting experts for the dynamic BFSI sector.',
      image: '/images/industry-finance.jpg'
    },
    {
      id: 5,
      name: 'Retail & FMCG',
      icon: ShoppingBag,
      desc: 'Retail managers, supply chain experts, and sales executives to scale your consumer goods operations.',
      image: '/images/industry-retail.jpg'
    },
    {
      id: 6,
      name: 'Logistics & Supply Chain',
      icon: Truck,
      desc: 'Warehouse managers, logistics coordinators, and operational staff to optimize your supply network.',
      image: '/images/industry-logistics.jpg'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/industries-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
          <FadeIn direction="none">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries We Serve</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> Industries</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <p className="text-gray-300 max-w-md text-sm leading-relaxed border-l-2 border-accent pl-4">
              We provide tailored HR and staffing solutions across diverse sectors, understanding the unique challenges of each industry.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <StaggerItem key={ind.id}>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-accent">
                      <ind.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{ind.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {ind.desc}
                  </p>
                  <a href="/contact" className="inline-flex items-center text-sm font-bold text-accent hover:text-primary transition-colors mt-auto">
                    Explore Solutions <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
        <FadeIn>
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't see your industry?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our recruitment methodologies are highly adaptable. Contact our consultants to discuss a custom staffing strategy for your niche sector.
              </p>
              <a href="/contact" className="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg">
                Consult With Us Today
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Industries;

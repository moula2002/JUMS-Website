import { CheckCircle2, Search, Users, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

const Solutions = () => {
  const solutions = [
    {
      id: 'executive-search',
      title: 'Executive Search & Leadership Hiring',
      icon: Search,
      desc: 'Identifying and securing visionary leaders who can drive your organization forward. We leverage deep industry networks to find C-suite and VP-level executives.',
      features: ['Confidential search process', 'Extensive leadership network', 'Cultural fit assessment', 'Negotiation support'],
      image: '/images/solution-exec.jpg'
    },
    {
      id: 'contract-staffing',
      title: 'Contract Workforce Management',
      icon: Users,
      desc: 'Agile staffing solutions to help you scale your workforce according to project demands. We manage the entire lifecycle of contract employees.',
      features: ['Rapid deployment', 'Payroll administration', 'Compliance management', 'Flexible contract terms'],
      image: '/images/solution-contract.jpg'
    },
    {
      id: 'payroll-outsourcing',
      title: 'End-to-End Payroll Outsourcing',
      icon: Calculator,
      desc: 'Ensure 100% accurate and on-time payroll processing for your entire workforce, fully compliant with the latest tax laws and regulations.',
      features: ['Automated salary processing', 'Tax deductions & filing', 'Employee self-service portal', 'Custom reporting'],
      image: '/images/solution-payroll.jpg'
    },
    {
      id: 'compliance-management',
      title: 'Statutory Compliance Management',
      icon: ShieldCheck,
      desc: 'Mitigate legal risks with our comprehensive compliance services. We ensure your HR operations align with local, state, and national labor laws.',
      features: ['PF & ESI management', 'Labor law audits', 'Factory act compliance', 'Legal advisory'],
      image: '/images/solution-compliance.jpg'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/solutions-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
          <FadeIn direction="none">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Enterprise Solutions</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> Solutions</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <p className="text-gray-300 max-w-md text-sm leading-relaxed border-l-2 border-accent pl-4">
              Strategic, scalable, and compliant HR solutions designed to empower organizations and drive sustainable growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {solutions.map((sol, index) => (
          <FadeIn key={sol.id} direction={index % 2 === 0 ? "right" : "left"}>
            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-accent rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-[400px] object-cover rounded-3xl shadow-xl relative z-10"
                />
                <div className={`absolute top-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} z-20 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary`}>
                  <sol.icon className="w-8 h-8" />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">{sol.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {sol.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {sol.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors group">
                  Discuss this solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </FadeIn>
        ))}
      </section>

    </div>
  );
};

export default Solutions;

import { Calculator, Download, FileText, HelpCircle, FileSpreadsheet, ChevronDown } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger';

const Resources = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/resources-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
          <FadeIn direction="none">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">HR Resources</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> Resources</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <p className="text-gray-300 max-w-md text-sm leading-relaxed border-l-2 border-accent pl-4">
              Explore our collection of tools, templates, and insights to optimize your human resources operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* HR Tools & Downloads Grid */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">

            {/* HR Tools */}
            <div>
              <FadeIn className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">HR Tools</h2>
                </div>
                <p className="text-slate-600">Free calculators to help you manage your workforce finances.</p>
              </FadeIn>

              <StaggerContainer className="space-y-4">
                {[
                  { name: "Salary Calculator", desc: "Calculate take-home pay after taxes and deductions." },
                  { name: "Leave Calculator", desc: "Estimate accrued leaves based on employment terms." },
                  { name: "Employee Cost Calculator", desc: "Determine the true cost of a new hire including benefits." }
                ].map((tool, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                          <Calculator className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-lg group-hover:text-accent transition-colors">{tool.name}</h4>
                          <p className="text-sm text-slate-500 mt-1">{tool.desc}</p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Downloads */}
            <div>
              <FadeIn className="mb-10" delay={0.2}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Download className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">Downloads</h2>
                </div>
                <p className="text-slate-600">Essential templates and checklists for your HR department.</p>
              </FadeIn>

              <StaggerContainer className="space-y-4">
                {[
                  { name: "HR Policy Templates", icon: FileText, desc: "Standard policies for modern workplaces." },
                  { name: "Employee Handbook", icon: FileText, desc: "Comprehensive guide for new joiners." },
                  { name: "Compliance Checklists", icon: FileSpreadsheet, desc: "Ensure you meet all legal requirements." }
                ].map((doc, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-accent group-hover:text-primary transition-colors">
                          <doc.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-lg group-hover:text-accent transition-colors">{doc.name}</h4>
                          <p className="text-sm text-slate-500 mt-1">{doc.desc}</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:text-white transition-colors">
                        <Download className="w-4 h-4" />
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600">Common HR and recruitment-related questions.</p>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {[
              { q: "What industries do you specialize in?", a: "We specialize in a wide range of industries including Information Technology, Healthcare, Manufacturing, Banking & Finance, and Retail." },
              { q: "How long does your recruitment process take?", a: "Our average candidate shortlisting time is 72 hours, though executive search roles may take slightly longer due to the extensive screening process." },
              { q: "Do you offer temporary staffing solutions?", a: "Yes, we provide flexible workforce outsourcing for both temporary and permanent requirements." },
              { q: "Are your payroll services compliant with local labor laws?", a: "Absolutely. Our payroll management includes 100% compliance with all regional and national labor laws and tax regulations." }
            ].map((faq, i) => (
              <StaggerItem key={i}>
                <details className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden open:shadow-md transition-all">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-primary list-none">
                    {faq.q}
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5 text-accent" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default Resources;

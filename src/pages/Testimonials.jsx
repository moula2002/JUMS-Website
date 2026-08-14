import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ravi Kumar',
      role: 'CEO, TechNova Solutions',
      text: 'Your trusted HR partner services exceeded our expectations. Your recruitment process was seamless and we found the exact talent we were looking for. Highly recommended!',
      image: '/images/testimonial-1.jpg'
    },
    {
      id: 2,
      name: 'Anita Sharma',
      role: 'HR Head, Visionary Corp',
      text: 'The expertise and dedication shown by JUMS in handling our payroll and compliance have been outstanding. They truly are a reliable extension of our HR department.',
      image: '/images/testimonial-2.jpg'
    },
    {
      id: 3,
      name: 'Suresh Patel',
      role: 'Managing Director, NextGen',
      text: 'Partnering with JUMS for our staffing needs was the best decision. Their ethical approach and quick turnaround time have immensely helped our business scale rapidly.',
      image: '/images/testimonial-3.jpg'
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/testimonials-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> Testimonials</p>
          </div>
          <div className="animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-300 max-w-md text-sm leading-relaxed border-l-2 border-accent pl-4">
              Discover how our innovative HR and staffing solutions have transformed organizations globally.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">What Our Clients Say</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16">
          Don't just take our word for it. Here's what our partners have to say about our services and commitment.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-left relative shadow-sm hover:shadow-md transition-shadow">
              <Quote className="text-accent/20 w-16 h-16 absolute top-6 right-6" />

              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed relative z-10 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

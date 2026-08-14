import { Link } from 'react-router-dom';
import { Calendar, User, ChevronRight } from 'lucide-react';

const BlogDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/resources-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog Details</h1>
          <p className="text-gray-300 font-medium">Home <span className="mx-2">/</span> Resources <span className="mx-2">/</span> The Future of HR in 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <img
                src="/images/resources-bg.jpg"
                alt="Blog Cover"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-6 font-medium">
                  <span className="flex items-center gap-2"><User className="w-4 h-4 text-accent" /> By Admin</span>
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> May 15, 2025</span>
                  <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Articles</span>
                </div>

                <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">The Future of HR in 2025: Trends and Innovations</h2>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                  <p>
                    The human resources landscape is evolving rapidly. Driven by technological advancements, shifting demographics, and changing employee expectations, HR professionals must adapt to stay relevant. In 2025, we can expect to see several key trends shaping the future of work.
                  </p>

                  <h3 className="text-xl font-bold text-primary mt-8 mb-4">Key Trends to Watch</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>AI and Automation:</strong> Artificial intelligence will continue to streamline routine tasks, allowing HR to focus on strategic initiatives.</li>
                    <li><strong>Employee Experience:</strong> Organizations will prioritize creating a positive and engaging work environment to attract and retain top talent.</li>
                    <li><strong>Remote Work Culture:</strong> Flexible work arrangements will become the norm, requiring new approaches to management and collaboration.</li>
                    <li><strong>Data-Driven Decision Making:</strong> HR analytics will play a crucial role in shaping talent strategies and measuring performance.</li>
                  </ul>

                  <p>
                    As we navigate these changes, it's essential for HR leaders to embrace innovation and foster a culture of continuous learning. By staying ahead of the curve, organizations can build resilient and high-performing teams ready to tackle the challenges of the future.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
                  <span className="font-bold text-slate-800 mr-2">Tags:</span>
                  <span className="bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer px-3 py-1 rounded-md text-xs font-semibold text-slate-600">HR Trends</span>
                  <span className="bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer px-3 py-1 rounded-md text-xs font-semibold text-slate-600">Future of Work</span>
                  <span className="bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer px-3 py-1 rounded-md text-xs font-semibold text-slate-600">Innovation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-6 pb-4 border-b border-gray-100">Recent Posts</h3>
              <div className="space-y-6">
                {[
                  { title: 'Building a Strong Employer Brand', date: 'May 10, 2025', img: '/images/blog-1.jpg' },
                  { title: 'Effective Recruitment Strategies', date: 'Apr 28, 2025', img: '/images/blog-2.jpg' },
                  { title: 'HR Trends and Insights', date: 'Apr 20, 2025', img: '/images/testimonials-bg.jpg' },
                  { title: 'Employee Engagement Tips', date: 'Apr 15, 2025', img: '/images/services-bg.jpg' }
                ].map((post, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer">
                    <img src={post.img} alt={post.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary text-sm leading-tight mb-2 group-hover:text-accent transition-colors">{post.title}</h4>
                      <p className="text-xs text-slate-500 font-medium flex items-center gap-1"><Calendar className="w-3 h-3 text-accent" /> {post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-4 pb-4 border-b border-gray-100">Categories</h3>
              <ul className="space-y-3">
                {['Articles (12)', 'Guides (8)', 'News (5)', 'Downloads (3)'].map((cat, idx) => (
                  <li key={idx} className="flex justify-between items-center text-slate-600 hover:text-accent transition-colors cursor-pointer font-medium">
                    <span className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> {cat.split(' ')[0]}</span>
                    <span className="text-xs text-slate-400">{cat.split(' ')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BlogDetails;

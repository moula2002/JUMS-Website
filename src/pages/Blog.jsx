import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top HR Trends for Modern Businesses",
      category: "HR Insights",
      image: "/images/blog-1.jpg",
      excerpt: "Discover the latest trends in human resources that are shaping the future of work and how you can adapt.",
    },
    {
      id: 2,
      title: "Effective Employee Retention Strategies",
      category: "Management",
      image: "/images/blog-2.jpg",
      excerpt: "Learn how to keep your top talent engaged and committed to your organization for the long haul.",
    },
    {
      id: 3,
      title: "Importance of Payroll Compliance",
      category: "Compliance",
      image: "/images/blog-3.jpg",
      excerpt: "Navigate the complex world of payroll compliance to ensure your business meets all legal requirements.",
    },
    {
      id: 4,
      title: "Building High-Performance Teams",
      category: "Culture",
      image: "/images/blog-4.jpg",
      excerpt: "Strategies for fostering a collaborative culture that drives performance and innovation.",
    },
    {
      id: 5,
      title: "Navigating Remote Work Challenges",
      category: "Remote Work",
      image: "/images/blog-5.jpg",
      excerpt: "Best practices for managing and supporting remote teams effectively in a digital-first world.",
    },
    {
      id: 6,
      title: "The Role of AI in Recruitment",
      category: "Technology",
      image: "/images/blog-6.jpg",
      excerpt: "How artificial intelligence is revolutionizing talent acquisition and what it means for recruiters.",
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-accent opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> Blog</p>
          </div>
          <div>
            <p className="text-gray-300 max-w-md text-sm leading-relaxed border-l-2 border-accent pl-4">
              Insights, tips, and trends on HR, recruitment, and building successful teams.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-accent text-xs font-bold uppercase mb-2">{blog.category}</p>
                    <h3 className="font-bold text-primary leading-tight mb-4 group-hover:text-accent transition-colors">{blog.title}</h3>
                    <p className="text-slate-600 text-sm mb-6">{blog.excerpt}</p>
                  </div>
                  <span className="text-sm text-accent font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read Article <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
};

export default Blog;

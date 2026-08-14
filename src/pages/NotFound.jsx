import { Link } from 'react-router-dom';
import image404 from '../assets/images/404_illustration.png';

const NotFound = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary pt-16 pb-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Page Not Found</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> 404</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-[140px] font-extrabold text-primary leading-none tracking-tighter mb-2">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Oops! Page Not Found</h2>
            <p className="text-slate-500 mb-10 leading-relaxed max-w-sm text-sm">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="inline-block bg-accent hover:bg-accent-hover text-white px-10 py-3.5 rounded-md font-bold transition-colors shadow-lg shadow-accent/20">
              Go Back Home
            </Link>
          </div>
          
          {/* Right Side Illustration */}
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="relative w-full max-w-[400px]">
              {/* Illustration mockup representation */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-xl relative overflow-hidden flex flex-col items-center justify-center">
                <img src={image404} alt="404 Illustration" className="w-full max-w-[300px] object-contain mix-blend-multiply" />
              </div>

              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;

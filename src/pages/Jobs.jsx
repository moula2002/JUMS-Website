import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/Stagger';

const Jobs = () => {
  const [jobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [location, setLocation] = useState('All Locations');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categoriesList, setCategoriesList] = useState([]);
  const [totalJobsCount, setTotalJobsCount] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page: currentPage,
        limit: 5,
        ...(keyword && { keyword }),
        ...(category !== 'All Categories' && { category }),
        ...(location !== 'All Locations' && { location })
      });
      const response = await fetch(`https://jums-sever.onrender.com/api/jobs?${queryParams}`);
      if (response.ok) {
        const data = await response.json();
        setJobsList(data.jobs || []);
        setTotalPages(data.totalPages || 1);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://jums-sever.onrender.com/api/jobs/categories');
      if (response.ok) {
        const data = await response.json();
        setCategoriesList(data.categories || []);
        setTotalJobsCount(data.total || 0);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearch = () => {
    if (currentPage === 1) {
      fetchJobs();
    } else {
      setCurrentPage(1); // Setting state triggers the effect to fetchJobs
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="bg-primary relative pt-16 pb-20 px-4 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/jobs-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-6">
          <FadeIn direction="none">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Career Opportunities</h1>
            <p className="text-gray-400 font-medium text-sm">Home <span className="mx-2 text-gray-600">/</span> Careers</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <p className="text-gray-300 max-w-md text-sm leading-relaxed border-l-2 border-accent pl-4">
              Join our dynamic team or find your next big opportunity with our global partners.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">

        {/* Search Bar Block */}
        <FadeIn delay={0.1}>
          <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-lg border border-gray-100 flex flex-col md:flex-row gap-2 md:gap-4 mb-12">
            <div className="flex-1 flex items-center bg-gray-50 rounded-xl md:rounded-full px-5 py-3.5 border-none">
              <Search className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
              <input type="text" placeholder="Job Title / Keywords" className="w-full bg-transparent focus:outline-none text-sm text-slate-700 font-medium placeholder:font-normal" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} />
            </div>
            <div className="hidden md:block w-px bg-gray-200 h-8 self-center"></div>
            <div className="flex-1 flex items-center bg-gray-50 md:bg-transparent rounded-xl md:rounded-full px-5 py-3.5 border-none">
              <Briefcase className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
              <select className="w-full bg-transparent focus:outline-none text-sm text-slate-700 appearance-none font-medium" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="All Categories">All Categories</option>
                {categoriesList.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
              </select>
            </div>
            <div className="hidden md:block w-px bg-gray-200 h-8 self-center"></div>
            <div className="flex-1 flex items-center bg-gray-50 md:bg-transparent rounded-xl md:rounded-full px-5 py-3.5 border-none">
              <MapPin className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
              <select className="w-full bg-transparent focus:outline-none text-sm text-slate-700 appearance-none font-medium" value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="All Locations">All Locations</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>
            <button onClick={handleSearch} className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl md:rounded-full font-bold transition-colors shadow-md md:ml-2">
              Search Jobs
            </button>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Jobs List (Left) */}
          <StaggerContainer className="lg:col-span-2 space-y-4">
            {loading ? (
              <div className="text-center py-10 text-slate-500 font-semibold">Loading jobs...</div>
            ) : jobsList.length === 0 ? (
              <div className="text-center py-10 text-slate-500 font-semibold">No jobs found.</div>
            ) : jobsList.map(job => (
              <StaggerItem key={job._id || job.id}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-accent/5 rounded-xl flex items-center justify-center text-accent flex-shrink-0 border border-accent/10">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-3 hover:text-accent transition-colors cursor-pointer">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                        <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded"><Briefcase className="w-3.5 h-3.5" /> {job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <Link to={`/jobs/${job._id || job.id}`} className="text-accent font-bold text-sm flex items-center gap-1 hover:text-accent-hover whitespace-nowrap bg-accent/10 px-4 py-2 rounded-lg">
                    View Details
                  </Link>
                </div>
              </StaggerItem>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <FadeIn>
                <div className="flex justify-center items-center gap-2 mt-12">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button 
                      key={page} 
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold shadow-sm transition-colors ${currentPage === page ? 'bg-accent text-white' : 'bg-white text-slate-600 border border-gray-200 hover:bg-gray-50'}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 h-10 flex items-center justify-center rounded-xl bg-white text-primary border border-gray-200 hover:bg-gray-50 text-sm font-bold ml-2 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </FadeIn>
            )}
          </StaggerContainer>

          {/* Sidebar (Right) */}
          <FadeIn direction="left" delay={0.2} className="space-y-6">
            {/* Job Categories */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-6">Job Categories</h3>
              <ul className="space-y-4">
                <li 
                  onClick={() => { setCategory('All Categories'); handleSearch(); }}
                  className={`flex justify-between items-center font-semibold text-sm cursor-pointer transition-colors ${category === 'All Categories' ? 'text-accent' : 'text-slate-600 hover:text-accent'}`}
                >
                  <span className="flex items-center gap-2">All Categories</span>
                  <span className={`${category === 'All Categories' ? 'bg-accent/10 text-accent' : 'bg-gray-50 border-gray-100 text-slate-500'} px-2.5 py-0.5 rounded-full text-xs border`}>{totalJobsCount}</span>
                </li>
                {categoriesList.map((cat, idx) => (
                  <li 
                    key={idx} 
                    onClick={() => { setCategory(cat.name); handleSearch(); }}
                    className={`flex justify-between items-center cursor-pointer text-sm font-medium transition-colors ${category === cat.name ? 'text-accent' : 'text-slate-600 hover:text-accent'}`}
                  >
                    <span className="flex items-center gap-2">{cat.name}</span>
                    <span className={`${category === cat.name ? 'bg-accent/10 text-accent' : 'bg-gray-50 border-gray-100 text-slate-500'} border px-2.5 py-0.5 rounded-full text-xs`}>{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-6">Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent"><CheckCircle2 className="w-3.5 h-3.5" /></div> Competitive Salary
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent"><CheckCircle2 className="w-3.5 h-3.5" /></div> Career Growth
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent"><CheckCircle2 className="w-3.5 h-3.5" /></div> Learning Programs
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent"><CheckCircle2 className="w-3.5 h-3.5" /></div> Flexible Work Environment
                </li>
              </ul>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Application Form</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600">Submit your details below and our talent acquisition team will review your application.</p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.05)] border border-gray-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-slate-700 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Email</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 text-slate-700 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 text-slate-700 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white transition-colors" placeholder="+1 234 567 8900" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Position Applying For</label>
                    <select className="w-full bg-gray-50 border border-gray-200 text-slate-700 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white transition-colors">
                      <option value="">Select a position</option>
                      <option value="hr-executive">HR Executive</option>
                      <option value="ta-specialist">Talent Acquisition Specialist</option>
                      <option value="hr-manager">HR Manager</option>
                      <option value="payroll-executive">Payroll Executive</option>
                      <option value="recruiter">Recruiter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Resume Upload</label>
                  <input type="file" className="w-full bg-gray-50 border border-gray-200 text-slate-700 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Message</label>
                  <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 text-slate-700 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:bg-white transition-colors" placeholder="Tell us about yourself..."></textarea>
                </div>

                <button type="button" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-accent/30 text-lg mt-4">
                  Submit Application
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Jobs;

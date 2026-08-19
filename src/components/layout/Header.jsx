import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/jobs' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'All Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Solutions', path: '/solutions' }
      ]
    },
    {
      name: 'Insights',
      path: '#',
      dropdown: [
        { name: 'Resources', path: '/resources' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Blogs', path: '/blog' }
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 border-t-4 border-t-accent ${isScrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-white/95 md:bg-white/100'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-20' : 'h-28'
          }`}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="JUMS Logo" className={`w-48 md:w-52 h-auto object-contain transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'
                }`} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group flex items-center h-full">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center text-sm font-semibold transition-colors py-8 ${isActive && link.path !== '#' ? 'text-accent' : 'text-slate-700 group-hover:text-accent'
                    }`
                  }
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />}
                </NavLink>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-[80px] left-0 w-48 bg-white shadow-lg border border-gray-100 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-gray-50 hover:text-accent transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/jobs"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded font-semibold text-sm transition-colors shadow-sm shadow-accent/30"
            >
              Job Openings
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-accent focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <div className="space-y-1">
                  <div className="px-3 py-2 text-base font-bold text-slate-900 border-b border-gray-100">
                    {link.name}
                  </div>
                  {link.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      to={dropItem.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 pl-6 rounded-md text-sm font-medium text-slate-600 hover:text-accent hover:bg-gray-50"
                    >
                      {dropItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-accent hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/jobs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-accent text-white hover:bg-accent-hover"
          >
            Job Openings
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

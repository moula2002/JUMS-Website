import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if there isn't a hash in the URL (which would trigger smooth scroll to section)
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant', // Instant scroll on route change so users don't see the scroll animation on navigation
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

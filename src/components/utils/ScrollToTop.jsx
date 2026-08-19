import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const lenis = useLenis();

  useEffect(() => {
    // Only scroll to top if there isn't a hash in the URL (which would trigger smooth scroll to section)
    if (!window.location.hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });
      }
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;

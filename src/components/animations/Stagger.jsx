import { useEffect, useRef, useState, Children, cloneElement, isValidElement } from 'react';

export const StaggerContainer = ({ children, staggerDelay = 0.1, delayChildren = 0, className = '' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        if (typeof child.type === 'string') return child;
        return cloneElement(child, {
          inView: isVisible,
          delay: delayChildren + index * staggerDelay
        });
      })}
    </div>
  );
};

export const StaggerItem = ({ children, className = '', direction = 'up', inView = false, delay = 0 }) => {
  const getTransform = () => {
    if (inView) return 'translate(0, 0)';
    switch (direction) {
      case 'up': return 'translateY(30px)';
      case 'down': return 'translateY(-30px)';
      case 'left': return 'translateX(30px)';
      case 'right': return 'translateX(-30px)';
      default: return 'translate(0, 0)';
    }
  };

  return (
    <div
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

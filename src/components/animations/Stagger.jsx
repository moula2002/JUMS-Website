import { motion } from 'framer-motion';

export const StaggerContainer = ({ children, staggerDelay = 0.1, delayChildren = 0, className = '' }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '', direction = 'up' }) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  const item = {
    hidden: { opacity: 0, ...directions[direction] },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
};

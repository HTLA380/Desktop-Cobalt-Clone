import React from 'react';
import { motion } from 'framer-motion';

interface AnimateTextProps {
  Wrapper?: any;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: any;
}

const AnimateText: React.FC<AnimateTextProps> = ({ Wrapper = motion.p, children, className, delay = 0, variants }) => {
  const scaleText = {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <Wrapper
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      variants={variants ? variants : scaleText}
      className={className}>
      {children}
    </Wrapper>
  );
};

export default AnimateText;

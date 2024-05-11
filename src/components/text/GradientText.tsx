import React from 'react';

interface GradientTextInterface {
  children: React.ReactNode;
  Wrapper?: React.ElementType;
  className?: string;
}

const GradientText: React.FC<GradientTextInterface> = ({ children, Wrapper = 'h3', className }) => {
  return (
    <Wrapper
      className={`text-[1.9rem]/[1.2] font-extrabold tracking-tight md:text-5xl/[1.2] bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent ${className}`}>
      {children}
    </Wrapper>
  );
};

export default GradientText;

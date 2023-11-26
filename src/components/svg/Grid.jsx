import React from "react";

const Grid = ({ className }) => {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id="hero"
          width="80"
          height="80"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero)"></rect>
    </svg>
  );
};

export default Grid;

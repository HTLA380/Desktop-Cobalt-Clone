import React from "react";

const Grid2 = ({ className }) => {
  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern
          id="genius-pattern"
          width="44"
          height="44"
          x="50%"
          y="100%"
          patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" stroke="currentColor"></path>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#genius-pattern)"></rect>
    </svg>
  );
};

export default Grid2;

import React from "react";

const ForecastBg = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 750 400"
      preserveAspectRatio="xMinYMin slice">
      <pattern
        id="diagonalHatch"
        patternUnits="userSpaceOnUse"
        width="4"
        height="8"
        patternTransform="rotate(45 2 2)">
        <path d="M -1,2 l 6,0" stroke="#A3A7B1" strokeWidth=".5"></path>
      </pattern>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#diagonalHatch)"></rect>
    </svg>
  );
};

export default ForecastBg;

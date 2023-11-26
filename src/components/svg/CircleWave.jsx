import React from "react";

const CircleWave = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 383 360">
      <path
        opacity=".3"
        d="M295.32 169.98c0-57.25-46.8-103.67-104.54-103.67-57.74 0-104.55 46.42-104.55 103.67s46.8 103.66 104.55 103.66c57.74 0 104.54-46.41 104.54-103.66Z"
        stroke="url(#aa)"
        strokeWidth="1.5"
        strokeMiterlimit="10"></path>
      <path
        opacity=".3"
        d="M330.43 169.97c0-76.34-62.4-138.22-139.4-138.22-76.98 0-139.39 61.88-139.39 138.22s62.41 138.22 139.4 138.22c76.98 0 139.4-61.88 139.4-138.22Z"
        stroke="url(#bb)"
        strokeWidth="1.5"
        strokeMiterlimit="10"></path>
      <path
        opacity=".3"
        d="M380.59 169.96c0-103.6-84.7-187.58-189.18-187.58S2.23 66.36 2.23 169.96c0 103.6 84.7 187.58 189.18 187.58s189.18-83.98 189.18-187.58Z"
        stroke="url(#cc)"
        strokeWidth="1.5"
        strokeMiterlimit="10"></path>
      <defs>
        <linearGradient
          id="aa"
          x1="85.81"
          y1="170.01"
          x2="295.7"
          y2="170.01"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#A3A7B1" stopOpacity="0"></stop>
          <stop offset=".49" stopColor="#A3A7B1"></stop>
          <stop offset="1" stopColor="#A3A7B1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="bb"
          x1="51.08"
          y1="170.02"
          x2="330.94"
          y2="170.02"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#A3A7B1" stopOpacity="0"></stop>
          <stop offset=".49" stopColor="#A3A7B1"></stop>
          <stop offset="1" stopColor="#A3A7B1" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="cc"
          x1="1.47"
          y1="170.02"
          x2="381.27"
          y2="170.02"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#A3A7B1" stopOpacity="0"></stop>
          <stop offset=".49" stopColor="#A3A7B1"></stop>
          <stop offset="1" stopColor="#A3A7B1" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CircleWave;

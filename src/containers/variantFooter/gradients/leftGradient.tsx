import React from 'react';

const LeftGradient = ({
  color1 = '#AFFCAE',
  color2 = '#00A3FF',
  className = 'h-[400px] absolute -top-32 -left-32',
}) => {
  return (
    <svg
      className={className}
      width="542"
      height="451"
      viewBox="0 0 542 451"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8" filter="url(#filter0_f_17_118)">
        <path
          d="M125 326L196.739 164.01L232.143 312.776L290.11 211.615L321.253 288.974L417 125"
          stroke="url(#paint0_linear_17_118)"
          strokeWidth="121.052"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_17_118"
          x="0.45874"
          y="0.46405"
          width="541.077"
          height="450.077"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="32"
            result="effect1_foregroundBlur_17_118"
          />
        </filter>
        <linearGradient
          id="paint0_linear_17_118"
          x1="271"
          y1="125"
          x2="271"
          y2="326"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color1} />
          <stop offset="1" stopColor={color2} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LeftGradient;

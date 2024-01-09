import React from 'react';

const RightGradient = ({
  color1 = '#C7AEFC',
  color2 = '#0085FF',
  className = 'xl:h-80 h-60 absolute -right-10 xl:-top-[88px] top-32',
}) => {
  return (
    <svg
      className={className}
      width="319"
      height="283"
      viewBox="0 0 319 283"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_17_123)">
        <path
          d="M93 189.111C126.14 188.943 199.034 169.587 225.494 93.5098"
          stroke="url(#paint0_linear_17_123)"
          strokeWidth="97.91"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_17_123"
          x="0.0450134"
          y="0.541473"
          width="318.418"
          height="281.525"
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
            stdDeviation="22"
            result="effect1_foregroundBlur_17_123"
          />
        </filter>
        <linearGradient
          id="paint0_linear_17_123"
          x1="172.443"
          y1="81.7549"
          x2="146.051"
          y2="200.866"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color1} />
          <stop offset="1" stopColor={color2} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RightGradient;

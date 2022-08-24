import * as React from "react";

const InstaSvg = (props) => (
  <svg
    width={55}
    height={55}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={3.485}
      y={6.795}
      width={45}
      height={45}
      rx={22.5}
      fill="#DE1CF6"
      fillOpacity={0.05}
      stroke="url(#a)"
    />
    <g filter="url(#b)">
      <rect
        x={5.485}
        y={4.795}
        width={45}
        height={45}
        rx={22.5}
        stroke="url(#c)"
      />
    </g>
    <path
      d="M25.984 26.17a3.13 3.13 0 0 0-3.124 3.124 3.13 3.13 0 0 0 3.124 3.125 3.13 3.13 0 0 0 3.124-3.125 3.13 3.13 0 0 0-3.124-3.124Zm9.37 3.124c0-1.293.012-2.575-.06-3.867-.073-1.5-.415-2.831-1.512-3.928-1.1-1.1-2.428-1.439-3.928-1.512-1.294-.072-2.576-.06-3.868-.06-1.293 0-2.575-.012-3.867.06-1.5.073-2.831.415-3.928 1.512-1.1 1.1-1.439 2.428-1.512 3.928-.072 1.294-.06 2.576-.06 3.867 0 1.292-.012 2.576.06 3.868.073 1.5.415 2.83 1.512 3.928 1.1 1.099 2.428 1.439 3.928 1.511 1.294.073 2.576.061 3.867.061 1.294 0 2.576.012 3.867-.06 1.5-.073 2.832-.415 3.929-1.512 1.099-1.1 1.439-2.428 1.511-3.928.075-1.292.061-2.574.061-3.868Zm-9.37 4.808a4.8 4.8 0 0 1-4.807-4.808 4.8 4.8 0 0 1 4.807-4.807 4.8 4.8 0 0 1 4.807 4.807 4.8 4.8 0 0 1-4.807 4.808Zm5.004-8.689a1.121 1.121 0 0 1-1.123-1.122c0-.622.502-1.123 1.123-1.123a1.121 1.121 0 0 1 .794 1.917 1.12 1.12 0 0 1-.794.328Z"
      fill="url(#d)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={40.894}
        y1={14.441}
        x2={30.056}
        y2={27.46}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3DCDFF" />
        <stop offset={1} stopColor="#B119FF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={42.894}
        y1={12.441}
        x2={32.056}
        y2={25.46}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3DCDFF" />
        <stop offset={1} stopColor="#B119FF" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={32.06}
        y1={23.244}
        x2={27.645}
        y2={28.547}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3DCDFF" />
        <stop offset={1} stopColor="#B119FF" />
      </linearGradient>
      <filter
        id="b"
        x={0.985}
        y={0.295}
        width={54}
        height={54}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={2}
          result="effect1_foregroundBlur_614_1372"
        />
      </filter>
    </defs>
  </svg>
);

export default InstaSvg;

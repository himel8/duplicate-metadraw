import * as React from "react";

const TwitterSvg = (props) => (
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
    <g clipPath="url(#d)">
      <path
        d="M37.628 22.233c-.835.37-1.732.62-2.675.732a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.23 13.23 0 0 1-9.602-4.867 4.66 4.66 0 0 0 1.442 6.22 4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.567 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995c-.371 0-.743-.021-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.097 13.255-13.253 0-.2-.005-.402-.014-.603a9.47 9.47 0 0 0 2.323-2.41l.002-.002Z"
        fill="url(#e)"
      />
    </g>
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
        id="e"
        x1={33.635}
        y1={23.312}
        x2={29.529}
        y2={29.378}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3DCDFF" />
        <stop offset={1} stopColor="#B119FF" />
      </linearGradient>
      <clipPath id="d">
        <path
          fill="#fff"
          transform="translate(13.985 17.295)"
          d="M0 0h24v24H0z"
        />
      </clipPath>
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
          result="effect1_foregroundBlur_614_1365"
        />
      </filter>
    </defs>
  </svg>
);

export default TwitterSvg;

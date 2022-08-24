import * as React from "react";

const DiscordSvg = (props) => (
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
      d="M36.302 19.788c-1.53-.69-3.17-1.2-4.885-1.49a.074.074 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.564 18.564 0 0 0-5.487 0 12.325 12.325 0 0 0-.617-1.23.077.077 0 0 0-.079-.038c-1.714.29-3.354.8-4.885 1.49a.07.07 0 0 0-.032.028c-3.112 4.575-3.965 9.037-3.546 13.443a.081.081 0 0 0 .031.055 20.032 20.032 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.04-.104 13.211 13.211 0 0 1-1.873-.878.076.076 0 0 1-.037-.06.074.074 0 0 1 .03-.065c.125-.093.251-.19.371-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.076.076 0 0 1 .08.009c.12.098.244.195.371.288a.074.074 0 0 1 .02.099.075.075 0 0 1-.026.026c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.049.074c0 .011.003.021.008.03.36.688.772 1.342 1.225 1.963a.077.077 0 0 0 .084.028 19.965 19.965 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.03-.028ZM24.005 30.574c-1.182 0-2.157-1.07-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38Zm7.975 0c-1.183 0-2.157-1.07-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38Z"
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
      x1={35.764}
      y1={21.483}
      x2={31.889}
      y2={27.689}
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#3DCDFF" />
      <stop offset={1} stopColor="#B119FF" />
    </linearGradient>
    <clipPath id="d">
      <path
        fill="#fff"
        transform="translate(15.985 15.295)"
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
        result="effect1_foregroundBlur_614_1379"
      />
    </filter>
  </defs>
</svg>
);

export default DiscordSvg;

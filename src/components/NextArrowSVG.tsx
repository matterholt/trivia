import * as React from "react"

const isDisabled = { lineColor: 'var(--main-blue)', fillColor: "var(--main-ltBlue)" }
const able = { lineColor: 'var(--main-blue)', fillColor: "white" }


function NextArrowSVG(props: any) {
  const { lineColor, fillColor } = props.isDisabled ? isDisabled :  able
  

  
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 28 28"
      fill={fillColor }
      xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <circle cx={14} cy={10} r={10} fill={fillColor } />
        <circle cx={14} cy={10} r={9.5} stroke={lineColor } />
      </g>
      <path
        d="M19.354 10.354a.5.5 0 000-.708l-3.182-3.182a.5.5 0 10-.708.708L18.293 10l-2.829 2.828a.5.5 0 10.708.708l3.182-3.182zM9 10.5h10v-1H9v1z"
        fill={lineColor }
      />
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default NextArrowSVG

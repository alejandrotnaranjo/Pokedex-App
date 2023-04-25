import React from 'react'
import Svg, { Path, G, Defs } from 'react-native-svg'

const ChevronLeftVector = () => {
  return (
        <Svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G filter="url(#filter0_d_1458_227)">
                <Path d="M9.47505 14.45L4.52505 9.5C4.44171 9.41667 4.38338 9.33333 4.35005 9.25C4.31672 9.16667 4.30005 9.075 4.30005 8.975C4.30005 8.875 4.31672 8.78333 4.35005 8.7C4.38338 8.61667 4.44171 8.53333 4.52505 8.45L9.50005 3.475C9.65005 3.325 9.82922 3.25 10.0375 3.25C10.2459 3.25 10.425 3.325 10.575 3.475C10.725 3.625 10.7959 3.80833 10.7875 4.025C10.7792 4.24167 10.7 4.425 10.55 4.575L6.15005 8.975L10.575 13.4C10.725 13.55 10.8 13.725 10.8 13.925C10.8 14.125 10.725 14.3 10.575 14.45C10.425 14.6 10.2417 14.675 10.025 14.675C9.80838 14.675 9.62505 14.6 9.47505 14.45V14.45Z" fill="white"/>
            </G>
            <Defs>
                <filter id="filter0_d_1458_227" x="0.300049" y="0.25" width="14.5" height="19.425" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1458_227"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="1.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1458_227"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1458_227" result="shape"/>
                </filter>
            </Defs>
        </Svg>
  )
}

export default ChevronLeftVector
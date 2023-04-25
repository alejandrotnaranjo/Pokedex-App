import React from 'react'
import Svg, { Path, G } from 'react-native-svg'

const ChevronRightVector = () => {
  return (
      <Svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G filter="url(#filter0_d_1458_16)">
          <Path d="M4.84995 14.45C4.71662 14.2834 4.64579 14.1 4.63745 13.9C4.62912 13.7 4.69995 13.525 4.84995 13.375L9.24995 8.97503L4.82495 4.55003C4.69162 4.4167 4.62912 4.23753 4.63745 4.01253C4.64579 3.78753 4.71662 3.60837 4.84995 3.47503C5.01662 3.30837 5.19579 3.2292 5.38745 3.23753C5.57912 3.24587 5.74995 3.32503 5.89995 3.47503L10.875 8.45003C10.9583 8.53337 11.0166 8.6167 11.05 8.70003C11.0833 8.78337 11.1 8.87503 11.1 8.97503C11.1 9.07503 11.0833 9.1667 11.05 9.25003C11.0166 9.33337 10.9583 9.4167 10.875 9.50003L5.92495 14.45C5.77495 14.6 5.59995 14.6709 5.39995 14.6625C5.19995 14.6542 5.01662 14.5834 4.84995 14.45V14.45Z" fill="white"/>
        </G>
        <defs>
          <filter id="filter0_d_1458_16" x="0.636719" y="0.236938" width="14.4631" height="19.4263" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1458_16"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1458_16"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1458_16" result="shape"/>
          </filter>
        </defs>
      </Svg>
  )
}

export default ChevronRightVector
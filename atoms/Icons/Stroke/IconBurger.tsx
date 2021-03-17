import React from 'react'

const IconBurger = (props): any => (
  <svg viewBox={`0 0 ${props.svgWidth} ${props.svgHeigth}`}
    width={`${props.svgWidth}mm`}
    height={`${props.svgHeight}mm`}>
    <path d='M1 1h8M1 4h 8M1 7h8'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round' />
  </svg>
);

export default IconBurger;

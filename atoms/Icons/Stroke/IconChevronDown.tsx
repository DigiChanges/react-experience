import React from "react";

<<<<<<< HEAD
<<<<<<< HEAD
const IconChevronDown = (): any => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox='0 0 20 20'
=======
const IconChevronDown = (props): any => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${props.svgWidth} ${props.svgHeigth}`}
    width={`${props.svgWidth}mm`}
    height={`${props.svgHeight}mm`}
>>>>>>> cc365e6 (WIP navbar)
=======
const IconChevronDown = (): any => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox='0 0 20 20'
>>>>>>> abd0100 ((WIP))
    fill="currentColor">
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd" />
  </svg>
);

export default IconChevronDown;

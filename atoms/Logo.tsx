import React from "react";

const Logo = (props: any): any => (
  <img src={props.image} alt={props.alt} className={props.className} />
);

export default Logo;

import React  from "react";

const Image = (props: any): any => (
      <img src={props.image} alt={props.alt} className={props.className} />
);

export default Image;

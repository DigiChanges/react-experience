import React  from "react";
import Image from "../atoms/Image";

const AvatarImage = (props: any): any => {

  const url = props.image ? props.image : props.avatar;

  return (
    <Image image={url} alt={props.alt} className={props.className}/>
  )
}

export default AvatarImage;

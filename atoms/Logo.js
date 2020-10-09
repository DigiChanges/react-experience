import * as React from "react";

const Logo = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <img src={props.image} alt="Logo image" className=" mx-auto" />
    </React.Fragment>
  );
};

export default Logo;

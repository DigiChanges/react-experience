import {Fragment}  from "react";

const Logo = (props) => {
  return (
    <Fragment>
      <img src={props.image} alt="Logo image" className=" mx-auto" />
    </Fragment>
  );
};

export default Logo;

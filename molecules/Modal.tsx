import React  from "react";

const Modal = (props) =>
{
  const {open, children} = props;

  return (
    <>
      {open && <div
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.8)" }}
      >
        <div className="container mx-auto h-full flex justify-center items-center">
            {children}
        </div>
      </div>}
    </>
  );
};

export default Modal;

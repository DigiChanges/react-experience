import React from "react";

const MediaObject = (props: any): any => {
  const { className, children } = props;

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default MediaObject;

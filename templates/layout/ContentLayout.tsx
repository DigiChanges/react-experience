import React from "react";

const ContentLayout = (props: any): any => {
  return (
    <div className="text-gray-700 body-font bg-gray-900 h-screen flex justify-center items-center">
      {props.children}
    </div>
  );
};

export default ContentLayout;

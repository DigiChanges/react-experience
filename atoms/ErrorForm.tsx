import React from "react";

const ErrorForm = ({ children, className = "" }) => (
  <div
    className={className ? `${className} text-red-500 p-2` : "text-red-500 absolute"}
  >
    {children}
  </div>
);

export default ErrorForm;

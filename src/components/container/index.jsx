import React from "react";

function Container({ children, className }) {
  return <div className={`max-w-6xl mx-auto ${className}`}>{children}</div>;
}

export default Container;

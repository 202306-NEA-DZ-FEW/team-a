import React from "react";

function Container({ children, className }) {
  return (
    <div className={`max-w-6xl mx-auto px-8 xl:px-0 ${className}`}>
      {children}
    </div>
  );
}

export default Container;

import React from "react";

const LinkText = ({ children, className, href = "#" }) => {
  return (
    <a href={href} className={`text-primary group-hover:text-white`}>
      {children}
    </a>
  );
};

export default LinkText;

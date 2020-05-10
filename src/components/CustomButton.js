import React from "react";
import "../styles/CustomButton.scss";

const CustomButton = ({ children, ...customButtonProps }) => {
  return (
    <button className="custom-button" {...customButtonProps}>
      {children}
    </button>
  );
};

export default CustomButton;

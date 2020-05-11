import React from "react";
import "../styles/CustomButton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...customButtonProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""}  custom-button`}
      {...customButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

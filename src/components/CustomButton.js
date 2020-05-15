import React from "react";
import "../styles/CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...customButtonProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      }  custom-button`}
      {...customButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

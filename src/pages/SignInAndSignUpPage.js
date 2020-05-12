import React from "react";
import "../styles/SignInAndSignUp.scss";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;

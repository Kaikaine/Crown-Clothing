import React, { Component } from "react";
import "../styles/SignIn.scss";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <CustomButton type="submit"> Sign In </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;

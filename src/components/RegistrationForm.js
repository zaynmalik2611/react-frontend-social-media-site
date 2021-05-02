import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import "./RegistrationForm.css";

class RegistrationForm extends Form {
  state = {
    data: {
      name: "",
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <h2>Sign Up</h2>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Sign Up")}
        </form>
      </>
    );
  }
}

export default RegistrationForm;

import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import "./LoginForm.css";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="login-form">
          <h2>Login</h2>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </>
    );
  }
}

export default LoginForm;

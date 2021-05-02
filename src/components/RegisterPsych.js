import React, { Component } from "react";
import Input from "./common/Input";
import Joi from "joi-browser";
import "./RegisterPsych.css";

class RegisterPsych extends Component {
  state = {
    education: {
      school: "",
      degree: "",
      field: "",
      startYear: "",
      endYear: "",
    },
    experience: {
      title: "",
      type: "",
      company: "",
      location: "",
      description: "",
    },
    errors: {},
  };

  schema = {
    education: {
      school: Joi.string().required().label("School"),
      degree: Joi.string().required().label("Degree"),
      field: Joi.string().required().label("Field"),
      startYear: Joi.string().required().label("startYear"),
      endYear: Joi.string().required().label("endYear"),
    },
    experience: {
      title: Joi.string().required().label("Title"),
      type: Joi.string().required().label("Type"),
      company: Joi.string().required().label("Company"),
      location: Joi.string().required().label("Location"),
      description: Joi.string().required().label("Description"),
    },
  };

  validate = (name) => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(
      this.state[name],
      this.schema[name],
      options
    );
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(e.target.id);
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log(`${e.target.id} form submitted`);
  };

  handleChangeEducation = ({ currentTarget: input }) => {
    const education = { ...this.state.education };
    education[input.name] = input.value;
    this.setState({ education });
  };

  handleChangeExperience = ({ currentTarget: input }) => {
    const experience = { ...this.state.experience };
    experience[input.name] = input.value;
    this.setState({ experience });
  };
  render() {
    const { education, experience, errors } = this.state;

    return (
      <>
        <h1>Register Psych</h1>
        <form id="education" onSubmit={this.handleSubmit}>
          <h5>Add Education</h5>
          <Input
            name="school"
            value={education.school}
            label="School/College/University"
            type="text"
            onChange={this.handleChangeEducation}
            error={errors["school"]}
          />
          <Input
            name="degree"
            value={education.degree}
            label="Degree/Certificate"
            type="text"
            onChange={this.handleChangeEducation}
            error={errors["degree"]}
          />
          <Input
            name="field"
            value={education.field}
            label="Field of Study"
            type="text"
            onChange={this.handleChangeEducation}
            error={errors["field"]}
          />
          <Input
            name="startYear"
            value={education.startYear}
            label="Start Year"
            type="text"
            onChange={this.handleChangeEducation}
            error={errors["startYear"]}
          />
          <Input
            name="endYear"
            value={education.endYear}
            label="End Year"
            type="text"
            onChange={this.handleChangeEducation}
            error={errors["endYear"]}
          />
          <button className="btn btn-primary">Save</button>
        </form>
        <form id="experience" onSubmit={this.handleSubmit}>
          <h5>Add Experience</h5>
          <Input
            name="title"
            value={experience.title}
            label="Title"
            type="text"
            onChange={this.handleChangeExperience}
            error={errors["title"]}
          />
          <Input
            name="type"
            value={experience.type}
            label="Type"
            type="text"
            onChange={this.handleChangeExperience}
            error={errors["type"]}
          />
          <Input
            name="company"
            value={experience.company}
            label="Company"
            type="text"
            onChange={this.handleChangeExperience}
            error={errors["company"]}
          />
          <Input
            name="location"
            value={experience.location}
            label="Location"
            type="text"
            onChange={this.handleChangeExperience}
            error={errors["location"]}
          />
          <Input
            name="description"
            value={experience.description}
            label="Description"
            type="text"
            onChange={this.handleChangeExperience}
            error={errors["description"]}
          />
          <button className="btn btn-primary">Save</button>
        </form>
      </>
    );
  }
}

export default RegisterPsych;

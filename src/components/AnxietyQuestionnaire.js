import React, { Component } from "react";
import "./AnxietyQuestionnaire.css";

class AnxietyQuestionnaire extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  state = {};
  render() {
    return (
      <>
        <div className="questionnaire-header">Anxiety Screening Test</div>
        <div className="quest-form">
          <form onSubmit={this.handleSubmit}>
            <p>
              Over the last 2 weeks, how frequently have you been teased by any
              of the following issues?
            </p>
            <div className="question">
              <label htmlFor="q1">1. Feeling anxious or nervous?</label>
              <div className="answer-div">
                <select name="q1" id="q1" size="4" required>
                  <option value="Not at all">Not at all</option>
                  <option value="few days">
                    A few days but less than a week
                  </option>
                  <option value="more than a week">More than a week</option>
                  <option value="everyday">Nearly everyday</option>
                </select>
              </div>
            </div>
            <div className="question">
              <label htmlFor="q2">
                2. Not being able to stop or control worrying?
              </label>
              <div className="answer-div">
                <select name="q2" id="q2" size="4" required>
                  <option value="Not at all">Not at all</option>
                  <option value="few days">
                    A few days but less than a week
                  </option>
                  <option value="more than a week">More than a week</option>
                  <option value="everyday">Nearly everyday</option>
                </select>
              </div>
            </div>

            <div className="question">
              <label htmlFor="q3">
                3. Worrying too much about different things?
              </label>
              <div className="answer-div">
                <select name="q3" id="q3" size="4" required>
                  <option value="Not at all">Not at all</option>
                  <option value="few days">
                    A few days but less than a week
                  </option>
                  <option value="more than a week">More than a week</option>
                  <option value="everyday">Nearly everyday</option>
                </select>
              </div>
            </div>

            <div className="question">
              <label htmlFor="q4">4. Trouble relaxing?</label>
              <div className="answer-div">
                <select name="q4" id="q4" size="4" required>
                  <option value="Not at all">Not at all</option>
                  <option value="few days">
                    A few days but less than a week
                  </option>
                  <option value="more than a week">More than a week</option>
                  <option value="everyday">Nearly everyday</option>
                </select>
              </div>
            </div>
            <div className="question">
              <label htmlFor="q5">
                5. Being so restless that it is hard to sit still?
              </label>
              <div className="answer-div">
                <select name="q5" id="q5" size="4" required>
                  <option value="Not at all">Not at all</option>
                  <option value="few days">
                    A few days but less than a week
                  </option>
                  <option value="more than a week">More than a week</option>
                  <option value="everyday">Nearly everyday</option>
                </select>
              </div>
            </div>
            <div className="question">
              <label htmlFor="q6">
                6. Becoming easily annoyed or irritable?
              </label>
              <div className="answer-div">
                <select name="q6" id="q6" size="4" required>
                  <option value="Not at all">Not at all</option>
                  <option value="few days">
                    A few days but less than a week
                  </option>
                  <option value="more than a week">More than a week</option>
                  <option value="everyday">Nearly everyday</option>
                </select>
              </div>
            </div>
            <div className="question">
              <label htmlFor="q7">
                7. Feeling afraid as if something aweful might happen?
              </label>
              <div className="answer-div">
                <select name="q7" id="q7" size="4" required>
                  <option value="Not at all">Not at all</option>
                  <option value="few days">
                    A few days but less than a week
                  </option>
                  <option value="more than a week">More than a week</option>
                  <option value="everyday">Nearly everyday</option>
                </select>
              </div>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default AnxietyQuestionnaire;

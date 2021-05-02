import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="user-profile">
          <div className="user-profile-cover">
            <div className="user-profile-pic"></div>
            <div className="user-profile-info">
              <p className="profile-username">Shahid Nazir</p>
              <p className="profile-bio">Hey there!</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;

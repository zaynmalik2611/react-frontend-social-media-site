import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Feed.css";
class Feed extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="profile-card">
                <div className="main-profile-pic"></div>
                <div className="profile-info">
                  <Link to="/profile">Shahid Nazir</Link>
                  <p>Hey there!</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <section className="newsfeed">
                <div className="card">
                  <div className="picture"></div>
                  <div className="content">
                    <div className="post-header">
                      <div className="profile-pic"></div>
                      <div className="detail">
                        <p className="name">Gul</p>
                        <p className="posted">2 hours ago</p>
                      </div>
                    </div>
                    <div className="desc">
                      Hello, is there anyone I can talk with?
                    </div>
                    <div className="footer">
                      <div className="like">
                        <i className="fas fa-heart"></i>
                        <span>12</span>
                      </div>
                      <div className="comment">
                        <i className="fas fa-comment"></i>
                        <span>3</span>
                      </div>
                      <div className="share">
                        <i className="fas fa-share"></i>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="picture"></div>
                  <div className="content">
                    <div className="post-header">
                      <div className="profile-pic"></div>
                      <div className="detail">
                        <p className="name">Ali</p>
                        <p className="posted">8 hours ago</p>
                      </div>
                    </div>
                    <div className="desc">Hi, How are you doing?</div>

                    <div className="footer">
                      <div className="like">
                        <i className="fas fa-heart"></i>
                        <span>10</span>
                      </div>
                      <div className="comment">
                        <i className="fas fa-comment"></i>
                        <span>5</span>
                      </div>
                      <div className="share">
                        <i className="fas fa-share"></i>
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="picture"></div>
                  <div className="content">
                    <div className="post-header">
                      <div className="profile-pic"></div>
                      <div className="detail">
                        <p className="name">Shahid</p>
                        <p className="posted">1 day ago</p>
                      </div>
                    </div>
                    <div className="desc">
                      Been suffering from severe compulsions for a week. Meds
                      are not effective. Hopeless and dead.
                    </div>
                    <div className="footer">
                      <div className="like">
                        <i className="fas fa-heart"></i>
                        <span>7</span>
                      </div>
                      <div className="comment">
                        <i className="fas fa-comment"></i>
                        <span>5</span>
                      </div>
                      <div className="share">
                        <i className="fas fa-share"></i>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Feed;

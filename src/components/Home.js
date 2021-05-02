import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Hello Welcome to Archway!</h1>
          <Link to="/login">
            <button className="btn btn-primary">Already a user? Login</button>
          </Link>
          <h4>Want to Join?</h4>
          <Link to="/register">
            <button className="btn btn-primary">SIGN UP</button>
          </Link>
        </div>
      </div>
      <div id="illness-posts">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="anxiety-card">
                <div className="card-inner-content">
                  <h1>What is Anxiety?</h1>
                  <p>
                    Anxiety is a normal and often healthy emotion. However, when
                    a person regularly feels disproportionate levels of anxiety,
                    it might become a medical disorder.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="depression-card">
                <div className="card-inner-content">
                  <h1>What is Depression?</h1>
                  <p>
                    Depression (major depressive disorder) is a common and
                    serious medical illness that negatively affects how you
                    feel, the way you think and how you act. Fortunately, it is
                    also treatable. Depression causes feelings of sadness and/or
                    a loss of interest in activities you once enjoyed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron text-center">
        <h5>
          We are a family of people suffering from mental health issues and
          people trying to solve these issues through professional help.
        </h5>
      </div>
      <footer className="page-footer font-small teal pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <div className="about-us">
                <h5 className="text-uppercase font-weight-bold">About Us</h5>
                <p>
                  As the name suggests, Archway Therapia is a gateway to therapy
                  for people with mental health issues. Our mission is to
                  provide friendly digital environment for the community and to
                  ease their problems with the help of technology.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
              <div className="mb-5 flex-center">
                <Link to="" className="fb-ic">
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </Link>

                <Link to="" className="tw-ic">
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </Link>

                <Link to="" className="gplus-ic">
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </Link>

                <Link to="" className="li-ic">
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </Link>

                <Link to="" className="ins-ic">
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </Link>

                <Link to="" className="pin-ic">
                  <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          <Link style={{ textDecoration: "none" }} to="/">
            Archway Therapia
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Home;

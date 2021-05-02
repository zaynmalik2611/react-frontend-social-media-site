import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import AnxietyQuestionnaire from "./components/AnxietyQuestionnaire";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import RegisterPsych from "./components/RegisterPsych";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/anxiety-screening" component={AnxietyQuestionnaire} />
          <Route path="/feed" component={Feed} />
          <Route path="/profile" component={Profile} />
          <Route path="/register-psych" component={RegisterPsych} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

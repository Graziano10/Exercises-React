import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">GithubUserList</Link>
      </nav>

      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={GithubUserList} />
        <Route path="/users/:username" component={ShowGithubUser} />
      </Router>
    </div>
  );
}

export default App;

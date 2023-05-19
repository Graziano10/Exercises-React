import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import GithubUserList from "./GithubUserList";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">GithubUserList</Link>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/users" component={GithubUserList} />
      </div>
    </Router>
  );
}

export default App;
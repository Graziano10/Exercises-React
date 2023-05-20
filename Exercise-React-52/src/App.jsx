import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import GithubUserList from "./components/GithubUserList";
import ShowGithubUser from "./components/ShowGithubUser";
import Home from "./components/Home";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={GithubUserList} />
        <Route path="/users/:username" component={ShowGithubUser} />
      </Router>
    </>
  );
}

export default App;


// You cannot render a <Router> inside another <Router>.
// You should never have more than one in your App.
// Mi esce questo errore non capisco. 
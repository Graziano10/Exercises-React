import React from "react";
import { Link, Route } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

const GithubUserList = () => {
  const userList = ['user1', 'user2', 'user3'];

  return (
    <div>
      <h1>GitHub User List</h1>

      <Route exact path="/users">
        <p>Add user</p>
      </Route>

      <ul>
        {userList.map((username) => (
          <li key={username}>
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>

      <Route path="/users/:username" component={ShowGithubUser} />
    </div>
  );
}

export default GithubUserList;
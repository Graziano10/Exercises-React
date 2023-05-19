import React from "react";
import { Link } from "react-router-dom";

const GithubUserList = () => {
  const userList = ["user1", "user2", "user3"];

  return (
    <div>
      <h2>Github User List</h2>
      <ul>
        {userList.map((username) => (
          <li key={username}>
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUserList;
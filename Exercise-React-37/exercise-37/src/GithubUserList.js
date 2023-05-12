import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export const GithubUserList = () => {
  const [usernames, setUsernames] = useState([]);
  const [newUsername, setNewUsername] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    setUsernames([...usernames, newUsername]);
    setNewUsername("");
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={newUsername}
          onChange={(event) => setNewUsername(event.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      {usernames.map((username) => (
        <GithubUser key={username} username={username} />
      ))}
    </div>
  );
};

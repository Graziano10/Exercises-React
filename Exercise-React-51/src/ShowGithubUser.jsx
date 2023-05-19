import React from "react";
import { useParams } from "react-router-dom";

const ShowGithubUser = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>Github User Details</h2>
      <p>Username: {username}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <img src={user.avatar} alt="User Avatar" />
    </div>
  );
};

export default ShowGithubUser;

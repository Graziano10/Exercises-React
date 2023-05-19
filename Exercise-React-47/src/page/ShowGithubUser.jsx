import React from "react";
import { useParams } from "react-router-dom";

const ShowGithubUser = () => {
  const { username } = useParams();

  return (
    <div>
      <h3>User: {username}</h3>
    </div>
  );
};

export default ShowGithubUser;
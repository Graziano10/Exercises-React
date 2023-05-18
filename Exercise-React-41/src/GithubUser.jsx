import React from "react";
import useGithubUser from "./useGithubUser";

const GithubUser = ({ username }) => {
  const { data, loading } = useGithubUser(username);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No user data available</p>;
  };

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Username: {data.login}</p>
      <p>Location: {data.location}</p>
    </div>
  );
};

export default GithubUser;

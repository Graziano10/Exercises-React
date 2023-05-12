import axios from "axios";
import React, { useEffect, useState } from "react";

export const GithubUser = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: `https://api.github.com/users/${username}`,
          method: "GET",
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Error 1001');
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Username: {data.login}</p>
      <p>Location: {data.location}</p>
    </div>
  );
};
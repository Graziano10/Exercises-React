import axios from "axios";
import React, { useEffect, useState } from "react";


const useGithubUser = (username) => {
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

  return {data, loading};
};

export default useGithubUser;

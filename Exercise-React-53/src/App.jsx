import React from "react";
import useGithubUser from "./useGithubUser";

function App() {
  const { user, isLoading, isError } = useGithubUser("username");


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      {user && (
        <ul>
          {user.map((item) => (
            <li key={item.id}>
              <p>User-Id: {item.userId}</p>
              <p>Title: {item.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
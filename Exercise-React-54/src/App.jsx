import React, { useEffect, useState } from "react";
import useGithubUser from "./useGithubUser";

function App() {
  const { user, isLoading, isError, refetch } = useGithubUser("username");
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {showList ? "Delete List" : "Show List"}
      </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching data.</div>
      ) : (
        <div>
          {showList && user && (
            <ul>
              {user.map((item) => (
                <li key={item.id}>
                  UserId: {item.userId}, Title: {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

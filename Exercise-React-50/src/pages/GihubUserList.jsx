import {Link} from "react-router-dom"


const GihubUserList = () => {

    const userNames = ['user1', 'user2', 'user3'];


    return (
        <div>
          <h3>User GitHub</h3>
          <ul>
            {userNames.map((username) => (
              <li key={username}>
                <Link to={`/users/${username}`}>{username}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
   
};

export default GihubUserList;
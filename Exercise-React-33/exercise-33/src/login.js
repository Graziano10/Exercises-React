import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "remember") {
      setRemember(value);
    }
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form>
        <label>
          username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          remeber me:
          <input
            type="checkbox"
            name="remember"
            value={remember}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <button onClick={handleSubmit}>Login</button>
        </label>
      </form>
    </div>
  );
};
export default Login;

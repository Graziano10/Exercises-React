import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setPassword({ name, password });
  };

  const disabled = name === "" || password === "";

  return (
    <div>
      <label>
        Usermane:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      <button onClick={handleLogin} disabled={disabled}>
        Login
      </button>
    </div>
  );
};

export default Login;

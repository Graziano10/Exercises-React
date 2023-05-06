import React, { useState } from "react";

const Login = () => {
  const [name02, setName02] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setPassword({ name02, password });
  };

  const handleReset = () => {
    setName02('');
    setPassword('');
  };

  const disabled = name02 === "" || password === "";

  return (
    <div>
      <label>
        Usermane:
        <input
          type="text"
          value={name02}
          onChange={(event) => setName02(event.target.value)}
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
      <button onClick={handleReset}>
        Reset
      </button>

    </div>
  );
};

export default Login;
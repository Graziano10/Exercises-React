import React, { useState } from "react";

const ClickTracker = () => {
  const [click, setClick] = useState(null);

  const handleClick = (event) => {
    setClick(event.target.name);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Last Clik: {click}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleClick} name="Button 1">
          Button 1
        </button>
        <button onClick={handleClick} name="Button 2">
          Button 2
        </button>
        <button onClick={handleClick} name="Button 3">
          Button 3
        </button>
      </div>
    </div>
  );
};

export default ClickTracker;

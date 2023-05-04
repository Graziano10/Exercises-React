import React, { useState } from "react";
import Welcome from "./welcome";

const InteractiveWelcome = () => {

  const [name, setName] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <>
      <div style={style}>
        <div>
          <label htmlFor="nameImput">Inserisci il tuo nome: </label>
          <input
            id="nameImput"
            type="text"
            value={name}
            onChange={handleName}
          />
        </div>
        <Welcome name={name} />
      </div>
    </>
  );
};

export default InteractiveWelcome;




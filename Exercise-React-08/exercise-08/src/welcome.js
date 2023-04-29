import React from "react";
import Age from './age';

const Welcome = (props) => {
  return (
    <div>
      <h1>
        Welcome <strong>{props.name}</strong>
      </h1>
      <Age  age= {props.age} />
    </div>
  );
};

export default Welcome;

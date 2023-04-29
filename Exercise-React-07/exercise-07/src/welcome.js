import React from "react";

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome <strong>{props.name}</strong></h1>  
     
      <p>Your age is {props.age}</p>
    </div>
  );
};

export default Welcome;
import React from "react";

const Age = (props) => {

    const { age } = props;

  return (
    <div>
        <p>Your age is {age}</p>
    </div>
  );
};

export default Age;
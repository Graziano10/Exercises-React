import React from 'react';
import Age from './age';

const Welcome = (props) => {
  const { name, age } = props;

  if (age > 18 && age < 65 && props.name === 'Jhon') {
    return (
      <div>
        <h1>
          Welcome <strong>{props.name}</strong>
        </h1>
        <Age age={age} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          Welcome
        </h1>
      </div>
    );
  };
};

export default Welcome;
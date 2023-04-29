import React from 'react';
import Welcome from "./welcome";
import Age from './age';

function App() {

  const age = 25;
  const name = 'Jhon';

  return (
    <div>
      <Welcome name={name} age={age} />  
    </div>
  );
}

export default App;


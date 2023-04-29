import React from 'react';
import Welcome from './welcome';

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
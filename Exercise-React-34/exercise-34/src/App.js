import { useState } from "react";
import { Counter } from "./ClickCounter";

function App() {
  const [counterComponentApp, setCounterComponentApp] = useState(0);

  const handleCounterChange = (newValue) => {
    setCounterComponentApp(newValue);
  };

  return (
    <div>
      <p>Counter Component App: {counterComponentApp}</p>
      <Counter props={handleCounterChange} />
    </div>
  );
}

export default App;

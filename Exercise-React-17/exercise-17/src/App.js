import React from "react";
import Counter from "./counter";

function App() {
  return (
     <Counter initialValue={0} incrementInterval={1000} incrementAmount={1}/>
  );
}

export default App;
import React from "react";
import LanguageProvider from "./LanguageSelector";



const App = () => {
  return (
    <LanguageProvider>
      <h1>App Language</h1>
      <DisplayLanguage />
    </LanguageProvider>
  );
};

export default App;


// I 2 esercizi Context - Create a `LanguageContext` sono conaspevole di non averli capiti nel modo corretto
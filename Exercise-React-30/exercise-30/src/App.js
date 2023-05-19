import React from "react";
import LanguageProvider from "./LanguageSelector";
import DisplayLanguage from "./displayLanguage";



const App = () => {
  return (
    <LanguageProvider>
      <h1>App Language</h1>
      <DisplayLanguage />
    </LanguageProvider>
  );
};

export default App;
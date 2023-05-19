import React from "react";
import { LanguageProvider } from "./LanguageContext";
import DisplayLanguage from "./DisplayLanguage";
import LanguageSelector from "./LanguageSelector";

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <h1>Language</h1>
        <DisplayLanguage />
        <LanguageSelector />
      </div>
    </LanguageProvider>
  );
};

export default App;
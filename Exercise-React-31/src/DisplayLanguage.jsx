import React, { createContext, useContext } from "react";

const LanguageContext = createContext();

const DisplayLanguage = () => {
  const language = useContext(LanguageContext);

  return (
    <div>
      <h2>Lingua corrente: {language}</h2>
    </div>
  );
};

export default DisplayLanguage;
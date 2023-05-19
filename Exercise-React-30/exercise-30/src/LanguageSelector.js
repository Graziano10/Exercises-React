import React, {createContext, useState } from "react";

const LanguageContext = createContext();



const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("italiano");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
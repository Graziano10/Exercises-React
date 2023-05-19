import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const DisplayLanguage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <h2>Current language: {language}</h2>
    </div>
  );
};

export default DisplayLanguage;

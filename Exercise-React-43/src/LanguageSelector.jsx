import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select">Select language: </label>
      <select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="Italian">Italian</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSelector;

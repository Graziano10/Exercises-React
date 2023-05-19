import React, {useState} from "react";


const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("italiano");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <LanguageContext.Provider value={selectedLanguage}>
      {children}
      <div>
        <label htmlFor="language-select">Seleziona la lingua:</label>
        <select
          id="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="italiano">Italiano</option>
          <option value="inglese">Inglese</option>
          <option value="spagnolo">Spagnolo</option>
        </select>
      </div>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
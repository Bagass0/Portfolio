import { createContext, useState, useEffect } from 'react';

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'fr');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <ConfigContext.Provider value={{ lang, setLang }}>
      {children}
    </ConfigContext.Provider>
  );
};
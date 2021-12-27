import React, {useState} from 'react';
import ThemeContext from './themeContext';
export const Provider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    const data = {
        isDarkMode: darkMode,
        darkModeControl: handleDarkMode
    };
    return <ThemeContext.Provider value={data}>{children}  </ThemeContext.Provider>;
  };
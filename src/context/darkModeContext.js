import React, { useState, useEffect } from "react";

const DarkModeContext = React.createContext({
  isDarkMode: false,
  toggle: () => {},
});

export const DarkModeContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkModeStatus = localStorage.getItem("isDarkMode");
    if (storedDarkModeStatus === "true") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [setIsDarkMode]);

  const toggle = () => {
    localStorage.setItem("isDarkMode", (!isDarkMode).toString());
    setIsDarkMode(!isDarkMode);
  };
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggle }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;

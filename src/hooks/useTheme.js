import React from "react";
import Theme from "../libs/Theme";

const ctx = React.createContext({});

export const Provider = ({ children }) => {

  let lightTheme = Theme.light;
  
  let darkTheme = Theme.dark;
  
  const [theme, setTheme] = React.useState({
    isLightTheme: true,
    lightTheme,
    darkTheme,
  });

  //This function handles theme toggling funcionality from light to dark
  const toggleTheme = () => {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };

  return <ctx.Provider value={{Theme, ...theme, toggleTheme}}>{children}</ctx.Provider>;
};

export const useTheme = () => React.useContext(ctx);

export default useTheme;

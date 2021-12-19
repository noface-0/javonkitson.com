import React from "react";
export const ThemeContext = React.createContext();

// eslint-disable
export default ({ children }) => {
    const [theme, setTheme] = React.useState("pink");

    const defaultContext = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={defaultContext}>
            {children}
        </ThemeContext.Provider>
    );
};
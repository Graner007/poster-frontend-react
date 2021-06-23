import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {   

    const [themes, setThemes] = useState(["dark", "light"]);

    return (
        <ThemeContext.Provider value={{ themes, setThemes }}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
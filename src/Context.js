import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = { darkMode: false };

const reducer = (state, action) => {
    if (action.type === 'toggle')
        return { darkMode: !state.darkMode }
    else
        return state;
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (<ThemeContext.Provider value={{ state, dispatch }}>
        {props.children}
    </ThemeContext.Provider>);
}
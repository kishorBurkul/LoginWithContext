import React, { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    //you can giv any defalut value like variable , method , 

    themeMode:"light",
    darkTheme : ()=>{},
    lightTheme: ()=>{},

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){

    return useContext(ThemeContext);
}
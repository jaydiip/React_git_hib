import React from "react";
import { createContext } from "react";

export const NameContext = React.createContext();

export const NameProvider = (props)=>{
    return (
        <NameContext.Provider value={{name:'jaydeep', surname:'joshi'}}>{props.children}</NameContext.Provider>
    )
}


import React, {
    createContext, useContent, useReducer 
} from "react";

//prepare the data layer
export const StateContext = createContext();

//Wrap
export const StateProvider = ({ reducer, initialState, children}) =>
(<StateContext.Provider value={useReducer(reducer, initialState )}>
    {children}
</StateContext.Provider>
);

//pull info

export const useStateValue =() => useContext(stateContext);

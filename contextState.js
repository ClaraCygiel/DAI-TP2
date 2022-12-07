import { useReducer } from "react";

export const initialState = {
    token: ''
}

export const ActionTypes = {
    setToken: 'SET_TOKEN', 
}

export const reducer = (state={},action)=> {
    switch (Action.type){
        case ActionTypes.setToken: 
        return {
            ...state, 
            token: action.value, 
        }
   

    default: 
    return state;
};
}

export const initialContext={
    contextState:initialState,
    setContextState:()=>{},
};

const Cont=React.createContext(initialContext);
export function ContextProvider({children,initial=initialState}){
    cons[state,dispatch]=useReducer(reducer,initial);
    const contextState=state;
    const setContextState=dispatch;
    return<Cont.Provider value={{contextState,setContextState}}>{children}</Cont.Provider>;
   
}
export const useContextState=()=>useContext(Cont);






import { useReducer, createContext, useContext } from "react";

export const initialState = {
    token: ''
}

export const ActionTypes = {
    setToken: 'SET_TOKEN',
}

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.setToken:
            return {
                ...state,
                token: action.value,
            }


        default:
            return state;
    };
}

export const initialContext = {
    contextState: initialState,
    setContextState: () => { },
};

const Cont = createContext(initialContext);
export function ContextProvider({ children, initial = initialState }) {
    const [state, dispatch] = useReducer(reducer, initial);
    const contextState = state;
    const setContextState = dispatch;
    return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>;

}
export const useContextState = () => useContext(Cont);






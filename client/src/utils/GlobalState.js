import React, { createContext, useReducer, useContext } from "react";
import { UPDATE } from "./actions";
import * as data from './data.json';

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE:
            return state;
        default:
            return state;
    }
};


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        portfolio: data
    });
    return <Provider value={[state, dispatch]} {...props} />;
};


const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

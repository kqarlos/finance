import React, { createContext, useReducer, useContext } from "react";
// import {} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
};


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        portfolio: {
            name: "Main",
            assets: ["BTC", "ETH"]
        }
    });
    return <Provider value={[state, dispatch]} {...props} />;
};


const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

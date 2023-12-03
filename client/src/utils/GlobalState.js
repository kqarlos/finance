import React, { createContext, useReducer, useContext } from "react";
import { UPDATE } from "./actions";

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
        portfolio: {
            name: "Main",
            assets: [{
                type: "Stock",
                name: "OPKO Health",
                tkr: "OPK",
                locations: ["Robinhood"],
                transactions: [{
                    date: "01/01/2020",
                    type: "BUY",
                    qty: 1,
                    pricePerUnit: 0,
                    fees: 0
                }]
            }, {
                type: "Stock",
                name: "Roblox",
                tkr: "RBLX",
                locations: ["Robinhood"],
                transactions: [{
                    date: "11/15/2021",
                    type: "BUY",
                    qty: 0.945461,
                    pricePerUnit: 105.77,
                    fees: 0
                }, {
                    date: "11/29/2021",
                    type: "BUY",
                    qty: 0.759868,
                    pricePerUnit: 126.04,
                    fees: 0
                }, {
                    date: "7/31/2022",
                    type: "BUY",
                    qty: 0.591334,
                    pricePerUnit: 42.28,
                    fees: 0
                }, {
                    date: "2/14/2023",
                    type: "BUY",
                    qty: 0.4311778,
                    pricePerUnit: 34.74,
                    fees: 0
                }]
            },]
        }
    });
    return <Provider value={[state, dispatch]} {...props} />;
};


const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

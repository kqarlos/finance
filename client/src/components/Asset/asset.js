import React, { useState, useEffect } from "react";
import Transaction from "../Transactions/transactions";

function Asset({ asset }) {

    // const [data, setData] = useState(null);
    // const apiKey = '429bf059-ccde-42be-8157-4c180c2375a7'

    // useEffect(() => {
    //     fetch(
    //         'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    //         + '?CMC_PRO_API_KEY=' + apiKey
    //         + '&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD'
    //     )
    //         .then(response => response.json())
    //         .then(json => setData(json))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <>
            <div>Type: {asset.type}</div>
            <div>Name: {asset.name}</div>
            <div>Ticker: {asset.tkr}</div>
            <div>Holdings: { }</div>
            <div>Current Value: GET DATA FROM API</div>
            <div>Avgerage Buying Price{ }</div>
            <div>Total Buying Price {asset.transactions.reduce((acc, txn) =>
                acc + (txn.qty * txn.pricePerUnit), 0

            )}</div>
            <div>Locations: {asset.locations}</div>
            <div>Transactions: <Transaction txns={asset.transactions} /></div>

        </>
    );
}

export default Asset;
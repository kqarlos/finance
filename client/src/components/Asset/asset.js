import React, { useState, useEffect } from "react";
import Transaction from "../Transactions/transactions";

function Asset({ asset }) {

    const [data, setData] = useState({
        holdings: asset.transactions.reduce((acc, txn) =>
            acc + txn.qty, 0
        ),
        totalBuyingPrice: asset.transactions.reduce((acc, txn) =>
            acc + (txn.qty * txn.pricePerUnit), 0),
        avgBuyingPrice: 0

    });

    // const apiKey = '429bf059-ccde-42be-8157-4c180c2375a7'

    useEffect(() => {
        // fetch(
        //     'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
        //     + '?CMC_PRO_API_KEY=' + apiKey
        //     + '&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD'
        // )
        //     .then(response => response.json())
        //     .then(json => setData(json))
        //     .catch(error => console.error(error));
        setData({ ...data, avgBuyingPrice: data.totalBuyingPrice / data.holdings })

    }, []);

    return (
        <div className="row bg-primary-subtle py-4  m-2" >
            <div>Type: {asset.type}</div>
            <div>Name: {asset.name}</div>
            <div>Ticker: {asset.tkr}</div>
            <div>Holdings: {data.holdings}</div>
            <div>Current Value: GET DATA FROM API</div>
            <div>Avgerage Buying Price {data.avgBuyingPrice}</div>
            <div>Total Buying Price {data.totalBuyingPrice}</div>
            <div>Locations: {asset.locations}</div>
            <div>Transactions:
                <Transaction txns={asset.transactions} />
            </div>

        </div>
    );
}

export default Asset;
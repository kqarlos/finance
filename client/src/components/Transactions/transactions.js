import React, { useState, useEffect } from "react";

function Transaction({ txns }) {

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
        <div className="container" >
            {txns.map((txn, i) => {
                return (
                    <div className="row" key={i}>
                        <div className="col">Date: {txn.date}</div>
                        <div className="col">Type: {txn.type}</div>
                        <div className="col">Quantity: {txn.qty}</div>
                        <div className="col">Price / Share: {txn.pricePerUnit}</div>
                        <div className="col">Total Price: {txn.qty * txn.pricePerUnit}</div>
                        <div className="col">fees: {txn.fees}</div>

                    </div>
                );
            })}
        </div>
    );
}

export default Transaction;
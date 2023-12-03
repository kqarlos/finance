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
        <>
            {txns.map((txn, i) => {
                return (
                    <>
                        <div>Date: {txn.date}</div>
                        <div>Type: {txn.type}</div>
                        <div>Quantity: {txn.qty}</div>
                        <div>Price per Share: {txn.pricePerUnit}</div>
                        <div>Total Price: {txn.qty * txn.pricePerUnit}</div>
                        <div>fees: {txn.fees}</div>
                        <br />


                    </>
                );
            })}
        </>
    );
}

export default Transaction;
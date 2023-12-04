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
        <div className="col" >


            <div className="row m-2 py-1 bg-primary text-white h5 rounded-3">
                <div className="col">Date</div>
                <div className="col">Type</div>
                <div className="col">Quantity</div>
                <div className="col">Price / Share</div>
                <div className="col">Total Price</div>
                <div className="col">Fees</div>

            </div>
            {txns.map((txn, i) => {
                return (

                    <div className="row bg-primary text-white mx-2 my-1 rounded-3" key={i}>
                        <div className="col">{txn.date}</div>
                        <div className="col">{txn.type}</div>
                        <div className="col">{txn.qty}</div>
                        <div className="col">{txn.pricePerUnit}</div>
                        <div className="col">{txn.qty * txn.pricePerUnit}</div>
                        <div className="col">{txn.fees}</div>

                    </div>
                );
            })}
        </div>
    );
}

export default Transaction;
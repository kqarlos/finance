import React, { useState, useEffect } from "react";
// import Transactions from "../Transactions/transactions";

function Asset({ asset }) {

    const [data, setData] = useState({
        // holdings: asset.transactions.reduce((acc, txn) =>
        //     acc + txn.qty, 0
        // ),
        // totalBuyingPrice: asset.transactions.reduce((acc, txn) =>
        //     acc + (txn.qty * txn.pricePerUnit), 0),
        // avgBuyingPrice: 0,
        displayLocations: true

    });

    let toggleTxn = () => {
        setData({ ...data, displayLocations: !data.displayLocations })
    }

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
        // setData({ ...data, avgBuyingPrice: data.totalBuyingPrice / data.holdings })

    }, []);

    return (

        <div className="row bg-primary-subtle py-3 my-5 mx-2 rounded-3">
            <div className="col">

                <div className="row m-2 py-1 bg-primary text-white h5 rounded-3">
                    <div className="col-3">Type</div>
                    <div className="col-3">Name</div>
                    <div className="col-3">Ticker</div>
                    <div className="col-3">CurrentValue</div>
                </div>

                <div className="row m-2">
                    <div className="col-3">{asset.type}</div>
                    <div className="col-3">{asset.name}</div>
                    <div className="col-3">{asset.tkr}</div>
                    <div className="col-3">GET FROM API</div>
                </div>

                <div className="row m-2 py-1 bg-primary text-white h5 rounded-3">
                    <div className="col-12" onClick={toggleTxn}>Locations:</div>
                </div>

                {data.displayLocations ?
                    <>
                        <div className="row m-2 py-1 bg-primary text-white h5 rounded-3">
                            <div className="col">Name</div>
                            <div className="col">Quantity</div>

                        </div>
                        {asset.locations.map((location, i) => {
                            return (

                                <div className="row bg-primary text-white mx-2 my-1 rounded-3" key={i}>
                                    <div className="col">{location.name}</div>
                                    <div className="col">{location.qty}</div>


                                </div>
                            );
                        })}
                    </> : <></>}


                {/* <div className="row m-2 py-1 bg-primary text-white h5 rounded-3">
                    <div className="col-3">Holdings</div>
                    <div className="col-3">Avg. Buying Price</div>
                    <div className="col-3">Total Buying Price</div>
                    <div className="col-3">Locations</div>
                </div>

                <div className="row m-2">
                    <div className="col-3">{data.holdings}</div>
                    <div className="col-3">{data.avgBuyingPrice}</div>
                    <div className="col-3">{data.totalBuyingPrice}</div>
                    <div className="col-3">{asset.locations}</div>
                </div> */}

                {/* <div className="row m-2 py-1 bg-primary text-white h5 rounded-3">
                    <div className="col-12" onClick={toggleTxn}>Transactions:</div>
                </div>

                <div className="row bg-primary-subtle" >
                    <Transactions txns={asset.transactions} />
                </div> */}

            </div>
        </div>
    );
}

export default Asset;
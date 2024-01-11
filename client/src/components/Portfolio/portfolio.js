import React, { useState } from "react";
import Asset from "../Asset/asset.js";

function Portfolio({ portfolio }) {

    const [data, setData] = useState({
        fiatValue: portfolio.fiat.reduce(
            (acc, asset) => {
                return acc + asset.locations.reduce(
                    (acc2, custodian) => {
                        return acc2 + (custodian.qty * asset.priceAction[0].price)
                    }
                    , 0)
            }, 0)
        ,
        stockValue: portfolio.stocks.reduce(
            (acc, asset) => {
                return acc + asset.locations.reduce(
                    (acc2, custodian) => {
                        return acc2 + (custodian.qty * asset.priceAction[0].price)
                    }
                    , 0)
            }, 0),
        cryptoValue: portfolio.crypto.reduce(
            (acc, asset) => {
                return acc + asset.locations.reduce(
                    (acc2, custodian) => {
                        return acc2 + (custodian.qty * asset.priceAction[0].price)
                    }
                    , 0)
            }, 0),

        ETFValue: portfolio.ETF.reduce(
            (acc, asset) => {
                return acc + asset.locations.reduce(
                    (acc2, custodian) => {
                        return acc2 + (custodian.qty * asset.priceAction[0].price)
                    }
                    , 0)
            }, 0)
    })

    return (
        <>
            <div className="h4">{data.fiatValue + data.ETFValue + data.cryptoValue + data.stockValue}</div>
            <div>
                <div className="row justify-content-around bg-primary py-2 my-2 rounded-3">
                    <div className="text-white h3">Fiat ${data.fiatValue}</div>
                    {portfolio.fiat.map((n, i) => {
                        return (
                            <Asset key={i} asset={n} />

                        );
                    })}
                </div>
            </div>
            <div>
                <div className="row justify-content-around bg-primary py-2 my-2 rounded-3">
                    <div className="text-white h3">Crypto ${data.cryptoValue}</div>
                    {portfolio.crypto.map((n, i) => {
                        return (
                            <Asset key={i} asset={n} />

                        );
                    })}
                </div>
            </div>
            <div>
                <div className="row justify-content-around bg-primary py-2 my-2 rounded-3">
                    <div className="text-white h3">Stocks ${data.stockValue}</div>
                    {portfolio.stocks.map((n, i) => {
                        return (
                            <Asset key={i} asset={n} />

                        );
                    })}
                </div>
            </div>
            <div>
                <div className="row justify-content-around bg-primary py-2 my-2 rounded-3">
                    <div className="text-white h3">ETF ${data.ETFValue}</div>
                    {portfolio.ETF.map((n, i) => {
                        return (
                            <Asset key={i} asset={n} />

                        );
                    })}
                </div>
            </div>
        </>


    );
}

export default Portfolio;
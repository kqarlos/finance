import React from "react";
import Asset from "../Asset/asset";

function Portfolio({ portfolio }) {


    return (
        <>
            <div className="row justify-content-around bg-primary py-2 my-2 rounded-3">
                <div className="text-white h3">Fiat</div>
                {portfolio.fiat.map((n, i) => {
                    return (
                        <Asset key={i} asset={n} />

                    );
                })}
            </div>
            <div className="row justify-content-around bg-primary py-2 my-2 rounded-3">
                <div className="text-white h3">Crypto</div>
                {portfolio.crypto.map((n, i) => {
                    return (
                        <Asset key={i} asset={n} />

                    );
                })}
            </div>
        </>


    );
}

export default Portfolio;
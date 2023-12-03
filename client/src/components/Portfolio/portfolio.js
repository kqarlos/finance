import React from "react";
import Asset from "../Asset/asset";

function Portfolio({ portfolio }) {


    return (
        <div className="container bg-primary p-2">
            <div>Name: {portfolio.name}</div>
            {portfolio.assets.map((n, i) => {
                return (
                    <Asset key={i} asset={n} />

                );
            })}
        </div>
    );
}

export default Portfolio;
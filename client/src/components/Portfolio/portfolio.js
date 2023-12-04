import React from "react";
import Asset from "../Asset/asset";

function Portfolio({ portfolio }) {


    return (
        <div className="container bg-primary py-4 rounded-3">
            <div className="text-white h3">{portfolio.name}</div>
            {portfolio.assets.map((n, i) => {
                return (
                    <Asset key={i} asset={n} />

                );
            })}
        </div>
    );
}

export default Portfolio;
import React from "react";
import Asset from "../Asset/asset";

function Portfolio({ assets }) {


    return (
        <>
            {assets.map((n, i) => {
                return (
                    <Asset index={i} asset={n} />
                );
            })}
        </>
    );
}

export default Portfolio;
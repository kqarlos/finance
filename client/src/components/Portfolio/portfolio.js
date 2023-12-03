import React from "react";
import Asset from "../Asset/asset";

function Portfolio({ assets }) {


    return (
        <>
            {assets.map((n, i) => {
                return (
                    <>
                        <Asset key={i} asset={n} />
                        <br />
                    </>

                );
            })}
        </>
    );
}

export default Portfolio;
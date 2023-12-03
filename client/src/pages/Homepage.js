import React from 'react';
import Portfolio from '../components/Portfolio/portfolio';
import { useStoreContext } from '../utils/GlobalState';

function Homepage() {

    const [state] = useStoreContext();

    return (
        <>
            <div>
                <div>Stocks</div>
                <Portfolio assets={state.portfolio.assets} />
            </div>

        </>
    );
}

export default Homepage;
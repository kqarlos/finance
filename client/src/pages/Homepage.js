import React from 'react';
import Portfolio from '../components/Portfolio/portfolio';
import { useStoreContext } from '../utils/GlobalState';

function Homepage() {

    const [state] = useStoreContext();

    return (
        <>
            {/* {state.portfolio.assets} */}
            <Portfolio assets={state.portfolio.assets} />

        </>
    );
}

export default Homepage;
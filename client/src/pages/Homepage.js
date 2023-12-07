import React from 'react';
import Portfolio from '../components/Portfolio/portfolio';
import { useStoreContext } from '../utils/GlobalState';

function Homepage() {

    const [state] = useStoreContext();

    return (
        <>
            <div>

                <div>Portfolios</div>
                <Portfolio portfolio={state.finances.portfolio} />
            </div>

        </>
    );
}

export default Homepage;
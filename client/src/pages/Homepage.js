import React from 'react';
import Portfolio from '../components/Portfolio/portfolio';
import { useStoreContext } from '../utils/GlobalState';

function Homepage() {

    const [state] = useStoreContext();

    return (
        <>
            <div className='container p-3'>

                <div className='h1 text-white'>Finances</div>

                <div className='row justify-content-around px-4 bg-white rounded'>


                    <div className='h2'>Portfolios</div>
                    <Portfolio portfolio={state.finances.portfolio} />
                </div>

                
            </div>

        </>
    );
}

export default Homepage;
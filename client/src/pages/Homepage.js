import React from 'react';
import Portfolio from '../components/Portfolio/portfolio';
import { useStoreContext } from '../utils/GlobalState';

function Homepage() {

    const [state] = useStoreContext();

    return (
        <>
            <div className='container p-2'>

                <div className='h1 text-white'>Finances</div>

                <div className='row px-4 bg-white'>


                    <div className='h2'>Portfolios</div>
                    <Portfolio portfolio={state.finances.portfolio} />
                </div>

                
            </div>

        </>
    );
}

export default Homepage;
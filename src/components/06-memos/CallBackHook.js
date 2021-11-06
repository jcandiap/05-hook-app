import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import './styles.css';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10); 

    // const incrementar = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback(
        ( num ) => {
            setCounter( c => c + num );
        },
        [ setCounter ],
    )

    return (
        <div>
            <h1>Call Back Hook: { counter }</h1>
            <hr/>

            <ShowIncrement increment={ increment }/>
        </div>
    )
}

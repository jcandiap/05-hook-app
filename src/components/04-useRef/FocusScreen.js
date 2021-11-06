import React from 'react'
import { useRef } from 'react';
import './styles.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    // console.log(ref);

    const handleClick = () => {
        inputRef.current.select();
    }


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref = { inputRef }
                className="form-control" 
                placeholder="Su Nombre" />

            <button
                className = "btn btn-outline-primary mt-3"
                onClick = { handleClick }>
                    Focus
            </button>
        </div>
    )
}

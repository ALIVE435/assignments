import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
//2nd usecase of useref
export function Assignment2() {
    const [count, setCount] = useState(0);
    console.log("re-render",count)

    /*const handleReRender = () => {
        // Update state to force re-render
        //setCount((count)=>{return count+1}); //setCount invoke this callback,putting existing count value as argument
        //setCount((count)=>{return count+1}); //changing the state occurs in a bunches ie react track all state changes and send all them in a bunch

        setCount(count+1)
        setCount(count+2)
    };*/
    const noOfTimesRerendered=useRef(0);// useRef not only stores reference of components(or dom elements) across all rerenders it also stores int,string etc whose value may change but the reference to it remain same across all rerenders
    const handleReRender=()=>{
        setCount(count+1)
    }

    noOfTimesRerendered.current = noOfTimesRerendered.current+1;
    return (
        <div>
            <p>This component has rendered {noOfTimesRerendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};
import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputRef=useRef()

    useEffect(() => {
        // //using dom API:
        // document.getElementsByTagName("input")[0].focus()
        inputRef.current.focus()
    }, [inputRef]);

    const handleButtonClick = () => {
        //using dom API:
        document.getElementsByTagName("input")[0].focus()
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};

import { useState,memo,useCallback } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement=useCallback(function (){  //when we pass empty dependencies array, the function is declared(or initialised) only once on 1st rendering or we can say it's reference remain same even after this component is rendered again(function not created again ie recognise as same) and since props hasn't changed respective child components are not rendered again.
        console.log("increase")
        setCount((c)=>{
            console.log(c)
            return c+1
        })
    },[])

    const handleDecrement=useCallback(function (){
        console.log("decrease")
        setCount(count-1)  //if we want to setcount this way, we have to pass count as dependency array so that it can be accessed(to avoid unusual behave) and if it is , anytime the count changes by incrementing, it changes the this function(referentiallly) hence props changes for counterButtons and gets re-rendered
    },[count])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons= memo(
    ({onIncrement,onDecrement})=>{
        console.log("re-rendered")
        return (
            <div>
            <button onClick={onIncrement}>Increase</button><br></br>
            <button onClick={onDecrement}>Decrease</button>
        </div>
        )
    }
)

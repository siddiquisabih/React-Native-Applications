import React, { useState } from 'react';
 



const UseCounterHook = (initialValue: number) => {

    const [counter, setCounter] = useState(initialValue = 0)


    const increment = () => { setCounter(counter + 1) }
    const dencrement = () => { setCounter(counter - 1) }
    const reset = () => { setCounter(initialValue) }

    return { counter, increment, dencrement, reset }

}


export default UseCounterHook;

import React, { useState } from "react";
const Conter = () => {

    let [count, setCount] = useState(0);


    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 2)}>+</button>
            {/* <button onClick={() => setCount(count + 2)}> Just come to me!</button> */}
            <button onMouseDown ={()=> setCount(count - 2)}>-</button>
        </>
    )
}

export default Conter;
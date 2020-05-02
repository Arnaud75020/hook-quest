import React, { useState } from "react";

function Counter() {

    const[count, setCount] = useState(10);

    function handleInitialCountChange(e) {
        setCount(Number(e.target.value));
    }
    
console.log(typeof count)
return (
    <div>
    <p>The counter is at : {count} </p>
    <button onClick={() => setCount(count + 1)}>>
        +1
    </button>
    <button onClick={() => setCount(count - 1)}>>
        -1
    </button>
    <input 
        value={count}
        onChange={handleInitialCountChange}>
        </input>
    </div>
);
}

export default Counter;

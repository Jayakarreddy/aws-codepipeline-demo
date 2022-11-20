import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(4);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    }
    
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    }
    
    return (
        <div>
            <h1>Counter</h1>
            <button data-testid="decrement" onClick={handleDecrement}>-</button>
            <h3 data-testid="count">{count}</h3>
            <button data-testid="increment" onClick={handleIncrement}>+</button>
        </div>
    )
}
'use client;'

import { useState } from "react";

export default function StateExample() {
    //var count = 0;
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1)
        console.log(count);
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click Me!
            </button>
            <p>You clicked the button {count} times.</p>
        </div>
    );
}
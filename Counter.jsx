import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);



    function increment() {
        setCounter(Counter + 1);
    }

    return (
        <div>
            <h2>{Counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}
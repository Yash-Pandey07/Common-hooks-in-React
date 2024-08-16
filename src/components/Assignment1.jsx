import { useState, useMemo } from "react";

// Utility function to calculate factorial
function calculateFactorial(num) {
    let value = 1;
    for (let i = 1; i <= num; i++) {
        value *= i;
    }
    return value;
}

export function Assignment1() {
    // State to hold the user input value
    const [input, setInput] = useState(0);

    // State to hold a counter value
    const [counter, setCounter] = useState(0);

    // Memoized factorial calculation to prevent unnecessary recalculations
    const expensiveValue = useMemo(() => calculateFactorial(input), [input]);

    // Function to increment the counter
    const handleClick1 = () => {
        setCounter(counter + 1);
    };

    // Function to decrement the counter
    const handleClick2 = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            {/* Input field to get user input for factorial calculation */}
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />

            {/* Display the calculated factorial value */}
            <p>Calculated Value: {expensiveValue}</p>

            {/* Display the current counter value */}
            Counter App
            <div>
                {counter}
            </div>

            {/* Button to increment the counter */}
            <button
                style={{
                    fontSize: "60%",
                    position: "relative",
                    backgroundColor: "green",
                    color: "white",
                }}
                onClick={handleClick1}
            >
                Increment
            </button>

            {/* Button to decrement the counter */}
            <button
                style={{
                    fontSize: "60%",
                    position: "relative",
                    backgroundColor: "red",
                    color: "white",
                }}
                onClick={handleClick2}
            >
                Decrement
            </button>
        </div>
    );
}

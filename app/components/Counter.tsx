"use client"

import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(1)

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)
    const reset = () => setCount(1)

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <div className="flex gap-2">
                <button 
                    onClick={decrement}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                    Decrement
                </button>
                <button 
                    onClick={increment}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                    Increment
                </button>
                <button 
                    onClick={reset}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                >
                    Reset
                </button>
            </div>
            <p className="text-2xl font-bold">Count: {count}</p>
        </div>
    )
}

export default Counter
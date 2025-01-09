import { useEffect, useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementButton = () => {
        setCount((count) => {
            return count + 1;
        })
    }

    const decrementButton = () => {
        setCount((count) => {
            return count - 1;
        })
    }

    const resetButton = () => {
        setCount(0)
    }

    useEffect (() => {
        document.title = `Contatore: ${count}`;
    }, [count]);

    return (
        <div className="flex justify-center items-center h-screen gap-4 p-10 bg-slate-600">
            <button className="bg-slate-400 p-2 rounded-2xl text-gray-800 h-12 hover:bg-green-300" 
                    onClick={incrementButton}>Increment</button>
            <button className="bg-slate-400 p-2 rounded-2xl text-gray-800 h-12 hover:bg-red-300" 
                    onClick={decrementButton}>Decrement</button>
            <button className="bg-slate-400 p-2 rounded-2xl text-gray-800 h-12 hover:bg-yellow-200" 
                    onClick={resetButton}>Reset</button>
            <p className="font-bold p-2 text-gray-200">Counter: {count}</p>
        </div>
    )
}

export default Counter
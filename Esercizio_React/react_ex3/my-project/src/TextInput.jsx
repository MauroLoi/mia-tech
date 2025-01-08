import { useState } from "react";

const TextInput = () => {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        setInputValue(event.target.value)
    };

    return (
        <div className="bg-purple-400 flex flex-col justify-center items-center gap-6 h-screen p-10">
            <input  type="text" 
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Scrivi..."
                    className="text-center p-10 bg-purple-200 border-purple-400 rounded-md max-w-80 items-center"
            />
        </div>
    )
}

export default TextInput
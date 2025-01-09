import React, { useRef } from "react";

const UncontrolledInput = () => {

    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Valore attuale: ${inputRef.current.value}`);

    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center gap-4 p-20">
            <label className="text-2xl p-2">Nome:</label>
            <input type="text" name="nome" ref={inputRef} className="bg-slate-100 p-2 text-2xl rounded-full"/>
            <button type="submit" className="font-bold hover:bg-green-300 bg-slate-100 rounded-full p-2">Invia</button>
        </form>
    )
}

export default UncontrolledInput
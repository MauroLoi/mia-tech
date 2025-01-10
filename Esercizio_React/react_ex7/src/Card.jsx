import React from "react";

const Card = (props) => {

    return (
        <div className="Card bg-slate-500 w-72 h-96 rounded-xl p-3 flex gap-8 text-stone-100">
            {props.children}
        </div>
    )
}

export default Card
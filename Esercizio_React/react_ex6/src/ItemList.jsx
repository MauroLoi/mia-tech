
const ItemList = ({animals}) => {
    
    return (
        <ul className="flex flex-col p-4 text-3xl bg-slate-400">
            {
                animals.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))
            }
        </ul>
    )
}

export default ItemList
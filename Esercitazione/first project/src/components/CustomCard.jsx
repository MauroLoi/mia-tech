const CustomCard = ({ img, title, text }) => {
    return (
            <div className="card">
                <header>
                    <img src={img} alt={title} />
                </header>
                <div className="body-card">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
    )
}

export default CustomCard

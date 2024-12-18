import { useState } from "react";
import CustomCard from "./components/CustomCard";

const App = () => {

    const [cards, setCards] = useState([
        {
            img: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Foresta",
            text: "questa foresta è una foresta",
        },

        {
            img: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Baita sul lago",
            text: "questa lago è una lago con una baita",
        },

        {
            img: "https://images.pexels.com/photos/14092973/pexels-photo-14092973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Lago e montagne",
            text: "questo lago è ai piedi delle montagne",
        },

        {
            img: "https://images.pexels.com/photos/17217435/pexels-photo-17217435/free-photo-of-acqua-inverno-montagna-ghiaccio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Lago ghiacciato",
            text: "questo lago è ghiacciato",
        },

        {
            img: "https://images.pexels.com/photos/96387/pexels-photo-96387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Vulcano",
            text: "questo è un vulcano",
        },

        {
            img: "https://images.pexels.com/photos/8905097/pexels-photo-8905097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Vulcano in eruzione",
            text: "questo vulcano sta eruttando",
        },
    ]);


    return (
        <>
            <div className="card-container">
                {cards.map((card, index) => (
                    <CustomCard key={index} img={card.img} title={card.title} text={card.text} />
                ))}
            </div>
        </>
    )
}

export default App;


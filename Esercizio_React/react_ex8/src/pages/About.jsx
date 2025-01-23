import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis at vero nam soluta cumque, odit fuga ex, necessitatibus modi deleniti exercitationem sint commodi quo fugiat. Eaque illum accusamus repellat.</p>
            </div>
            <div>
                <button onClick={() => {navigate("/")}}>Home</button>
            </div>
        </>

    )
}

export default About
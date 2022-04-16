import { Link } from "react-router-dom"
import './styles.css'

const product = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsCZ27bBHg_N75iWfrJKN2OusK0z0Q6CJfkQ&usqp=CAU"
}

function Home() {
    return (
        <div className="ju-bonde">
            <h1>OInnnn ROGINHO</h1>
            <img src={product.img} alt="image"></img>
            <Link to="/clientes"><button>clientes</button></Link>
        </div>
    )
}

export default Home
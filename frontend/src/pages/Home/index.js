import { Link } from "react-router-dom"
import './styles.css'

function Home() {
    return (
        <div className="ju-bonde">
            <h1>OI</h1>
            <Link to="/clientes"><button>clientes</button></Link>
        </div>
    )
}

export default Home
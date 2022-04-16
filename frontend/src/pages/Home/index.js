import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>OlÁ</h1>
            <Link to="/clientes"><button>clientes</button></Link>
        </div>
    )
}

export default Home
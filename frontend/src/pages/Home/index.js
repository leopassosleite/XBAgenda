import { Link } from "react-router-dom"
import './styles.css'

function Home() {
    return (
        <div className="xbagenda-home">
            <h1>Oi Filipe, veja seus compromissos </h1>
            <div class="card">
                <div class="card-body" >
                    <h1 style={{ marginLeft: "-1px" }}>Sábado, 16 de abril  <Link to="/calendario" style={{ fontSize: "12px", marginLeft: "10px" }}>Ver calendário</Link></h1>
                    <h2 className="card-subtitle mb-2 text-muted" style={{ marginTop: "-1px" }}>Nenhum compromisso para hoje</h2>
                </div>
            </div>
            <div style={{marginTop:"50px", marginLeft: "15px"}}>
                <Link to="/clientes" className="card-link">Ver</Link>
            </div>
            <div className="card" style={{marginTop: "10px"}}>
                <div className="card-body">
                    <h4 className="card-title">Cliente: </h4>
                    <h5 className="card-subtitle mb-2 text-muted" style={{ fontSize: "15px" }}>telefone</h5>
                    <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: "15px" }}>data</h6>
                </div>
            </div>
        </div>
    )
}

export default Home
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ListingClients = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getClients = async () => {
            setLoading(true);
            const response = await fetch("https://xbagenda.herokuapp.com/clients");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }

        getClients()
    }, [])

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        );
    };

    const filterClient = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }
    const ShowClients = () => {
        return (
            <>
                <div className="buttons py-2 px-1">
                    <Link to="/add-cliente"><button className="btn btn-outline-success me-2"> ADD</button></Link>
                    <button className="btn btn-outline-dark me-2 ms-5" onClick={() => setFilter(data)}>Todos</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterClient("30 dias")}>30 dias</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterClient("60 dias")}>60 dias</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterClient("90 dias")}>90 dias</button>
                </div>

                <>
                    <div className="px-3">
                        <div className="row">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Empresa</th>
                                        <th>Email</th>
                                        <th>Telefone</th>
                                        <th>Prazo</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        filter.map(
                                            client =>
                                                <tr key={client.id}>
                                                    <td>{client.name}</td>
                                                    <td>{client.company}</td>
                                                    <td>{client.email}</td>
                                                    <td>{client.phone}</td>
                                                    <td>
                                                        <Link className="btn btn-info" to={`/edit-cliente/${client.id}`}>Editar</Link>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            </>
        )
    }
    return (
        <div>
            {loading ? <Loading /> : <ShowClients />}
        </div>
    )
}

export default ListingClients
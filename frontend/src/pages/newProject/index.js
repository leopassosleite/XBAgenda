import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddClient from '../AddClient'

function NewProject() {

    const navigate = useNavigate()

    function CreatePost(project) {

        fetch("http://localhost:8080/clients", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
            .catch(err => console.log(err))
            navigate("/clientes")
    }

    return (
        <div>
            <h1>Criar Projeto</h1>
            <AddClient handleSubmit={CreatePost} />
        </div>
    )
}

export default NewProject
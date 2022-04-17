import axios from "axios";

const DATABASE_URL = 'https://xb-agenda.herokuapp.com/clients';

class ClientService {
    getAllClients() {
        return axios.get(DATABASE_URL)
    }

    createClient(client){
        return axios.post(DATABASE_URL, client)
    }

    getClientById(clientId){
        return axios.get(DATABASE_URL + '/' + clientId);
    }

    updateClient(clientId, client) {
        return axios.put(DATABASE_URL + '/' + clientId, client);
    }

    deleteClient(clientId) {
        return axios.delete(DATABASE_URL + '/' + clientId);
    }
}

export default new ClientService();
import axios from "axios";

const DATABASE_URL = 'https://xbagenda.herokuapp.com/clients';

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
}

export default new ClientService();
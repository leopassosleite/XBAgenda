import axios from "axios";

const DATABASE_URL = 'https://xbagenda.herokuapp.com/clients';

class ClientService {
    getAllClients() {
        return axios.get(DATABASE_URL)
    }

    createClient(client){
        return axios.post(DATABASE_URL, client)
    }
}

export default new ClientService();
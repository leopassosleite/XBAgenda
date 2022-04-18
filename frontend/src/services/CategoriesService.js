import axios from "axios";

const DATABASE_URL = 'http://localhost:8080/categories';

class ClientService {

    getAllCategories() {
        return axios.get(DATABASE_URL)
    }
}

export default new ClientService();
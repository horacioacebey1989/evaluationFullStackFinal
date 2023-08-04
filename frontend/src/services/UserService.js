import axios from 'axios'
import { URL, config } from '../helpers/var';

class UserService {
    
    addUser(data) {
        return axios.post(URL+"users/addUser", data, config);
    }
    login(data) {
        return axios.post(URL+"users/loginUser", data, config);
    }
}

export default new UserService();

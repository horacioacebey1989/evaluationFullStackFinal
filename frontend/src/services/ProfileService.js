import axios from 'axios'
import { URL } from '../helpers/var';

class ProfileService {
    addProfile(data) {
        return axios.post(URL+"profiles/addProfile", data);
    }
}

export default new ProfileService();
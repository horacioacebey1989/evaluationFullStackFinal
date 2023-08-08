import axios from 'axios'
import { URL } from '../helpers/var';

class ProfileService {
    addProfile(data, id_user) {
        return axios.post(URL+"profiles/"+ id_user +"/addProfile", data);
    }
}

export default new ProfileService();
import axios from 'axios'
import { URL } from '../helpers/var';

class SubscriptionService {
    addSubscription(data) {
        return axios.post(URL+"subscription/addSubscription", data);
    }
    getSubscription(data) {
        return axios.post(URL+"subscription/getSubscription", data);
    }
}

export default new SubscriptionService();

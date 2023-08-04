import { ADD_SUBCRIPTION } from "./types";
import SubscriptionService from "../services/SubscriptionService";

export const createSubscription = (dateOfBirth, gender, address, phoneNumber, language, educationLevel) => async (dispatch) => {
    try {
      const res = await SubscriptionService.addSubscription({ dateOfBirth, gender, address, phoneNumber, language, educationLevel });
  
      dispatch({
        type: ADD_SUBCRIPTION,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
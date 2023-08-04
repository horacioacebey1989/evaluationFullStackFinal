import { ADD_PROFILE } from "./types";
import ProfileService from "../services/ProfileService";

export const createProfile = (fullName, country, user) => async (dispatch) => {
    try {
      const res = await ProfileService.addProfile({ fullName, country, user });
  
      dispatch({
        type: ADD_PROFILE,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};
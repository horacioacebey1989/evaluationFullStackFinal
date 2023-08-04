import { ADD_USER, LOGIN_USER } from "./types";
import UserService from "../services/UserService";

export const createUser = (name, password) => async (dispatch) => {
    try {
      console.log('HERE acttions');
      const res = await UserService.addUser({ name, password });
  
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};

export const loginUser = (name, password) => async (dispatch) => {
  try {
    const res = await UserService.login({ name, password });
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
import { ADD_COURSES, GET_COURSES } from "./types";
import CourseService from "../services/CourseService";

export const createCourse = (nameCourse, rate, duration) => async (dispatch) => {
    try {
      const res = await CourseService.addCourse({ nameCourse, rate, duration });
  
      dispatch({
        type: ADD_COURSES,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
};

export const getCourses = () => async (dispatch) => {
    try {
      const res = await CourseService.getCourses();
  
      dispatch({
        type: LOGIN_USER,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
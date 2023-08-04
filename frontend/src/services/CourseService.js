import axios from 'axios'
import { URL } from '../helpers/var';

class CourseService {
    addCourse(data) {
        return axios.post(URL+"courses/addCourse", data);
    }
    getCourses() {
        return axios.get(URL+"courses/getCourses");
    }
}

export default new CourseService();
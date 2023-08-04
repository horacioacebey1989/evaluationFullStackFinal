import { createProfile } from "../actions/profile";

const profileInitialState = {
  db: null,
};

const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {
        case createProfile :{
            return {
                ...state,
                db: action.payload.map((data) => data),
            };
        }
        default:
            return state;
    }
}

export default profileReducer;
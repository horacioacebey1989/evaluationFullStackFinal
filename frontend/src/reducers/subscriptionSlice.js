import { createSubscription } from "../actions/subscription";

const subscriptionInitialState = {
  db: null,
};

const subscriptionReducer = (state = subscriptionInitialState, action) => {
    switch (action.type) {
        case createSubscription :{
            return {
                ...state,
                db: action.payload.map((data) => data),
            };
        }
        default:
            return state;
    }
}

export default subscriptionReducer;
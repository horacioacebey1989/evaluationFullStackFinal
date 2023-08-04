import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../reducers/userSlice';
import subscriptionReducer from '../reducers/subscriptionSlice';
import profileReducer from '../reducers/profileSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    subscription: subscriptionReducer,
    profile: profileReducer
  }
})
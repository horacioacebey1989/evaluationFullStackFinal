import { createSlice } from '@reduxjs/toolkit';
import subscriptionSlice from './subscriptionSlice';

const initialState = {
    fullName: "",
    userName: "",
    country: "",
    user: ""
}

export const profileSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setProfile: (state, action) => {
      state.fullName = action.payload.fullName;
      state.userName = action.payload.userName;
      state.country = action.payload.country;
      state.user = action.payload.user;
    },
    unsetProfile: (state) => {
        state.fullName = "";
        state.userName = "";
        state.country = "";
        state.user = "";
    }
  }
})

export const { setProfile, unsetProfile } = profileSlice.actions;

export default profileSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  password: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
    unsetUser: (state) => {
      state.name = "";
      state.password = "";
    }
  }
})

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
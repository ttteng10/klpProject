import { createSlice } from '@reduxjs/toolkit';

const LoginReduxSlice = createSlice({
  name: 'LoginReduxSlice',
  initialState: { loginState: false, loginId: '' },
  reducers: {
    loginStateChange(state, action) {
      state.loginState = action.payload;
    },
    loginIdChange(state, action) {
      state.loginId = action.payload;
    },
  },
});

export const LoginReduxAction = LoginReduxSlice.actions;

export default LoginReduxSlice;

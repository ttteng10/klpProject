import { configureStore } from '@reduxjs/toolkit';
import LoginReduxSlice from './LoginRedux';
import CommunityReduxSlice from './CommunityRedux';

const store = configureStore({
  reducer: {
    loginCheck: LoginReduxSlice.reducer,
    communityData: CommunityReduxSlice.reducer,
  },
});

export default store;

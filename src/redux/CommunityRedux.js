import { createSlice } from '@reduxjs/toolkit';

const CommunityReduxSlice = createSlice({
  name: 'CommunityReduxSlice',
  initialState: {
    communityId: 0,
    title: '',
    main: '',
    loginId: '',
    imgUrl: '',
  },
  reducers: {
    communityIdChange(state, action) {
      state.communityId = action.payload;
    },
    titleChange(state, action) {
      state.title = action.payload;
    },
    mainChange(state, action) {
      state.main = action.payload;
    },
    loginIdChange(state, action) {
      state.loginId = action.payload;
    },
    imgUrlChange(state, action) {
      state.imgUrl = action.payload;
    },
  },
});

export const CommunityReduxAction = CommunityReduxSlice.actions;

export default CommunityReduxSlice;

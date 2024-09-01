import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        avatar: '',
    },
    reducers: {
        getUser(state, action) {
            state.user = action.payload;
        },
        updateUser(state, action) {
            state.user = action.payload;
        },
        updateAvatar(state, action) {
            state.avatar = action.payload;
        },
    },
});

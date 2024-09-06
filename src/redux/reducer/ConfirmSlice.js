import { createSlice } from '@reduxjs/toolkit';

export const confirmSlice = createSlice({
    name: 'confirm',
    initialState: {
        confirmUser: {},
    },
    reducers: {
        setConfirm(state, action) {
            state.confirmUser = action.payload;
        },
    },
});

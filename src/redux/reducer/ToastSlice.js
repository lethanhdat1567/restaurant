import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        toastCart: {
            id: null,
            status: false,
        },
        toastCartMobile: false,
    },
    reducers: {
        setToast(state, action) {
            state.toastCart = action.payload;
        },
        setToastMobile(state, action) {
            state.toastCartMobile = action.payload;
        },
    },
});

import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
        getProducts(state, action) {
            state.products = action.payload;
        },
    },
});

import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './reducer/UserSlice';
import { productsSlice } from './reducer/ProductsSlice';

const store = configureStore({
    reducer: {
        user: usersSlice.reducer,
        products: productsSlice.reducer,
    },
});

export default store;

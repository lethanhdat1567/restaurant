import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './reducer/UserSlice';
import { productsSlice } from './reducer/ProductsSlice';
import { toastSlice } from './reducer/ToastSlice';

const store = configureStore({
    reducer: {
        user: usersSlice.reducer,
        products: productsSlice.reducer,
        toast: toastSlice.reducer,
    },
});

export default store;

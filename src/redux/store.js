import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './reducer/UserSlice';
import { productsSlice } from './reducer/ProductsSlice';
import { toastSlice } from './reducer/ToastSlice';
import { confirmSlice } from './reducer/ConfirmSlice';
const store = configureStore({
    reducer: {
        user: usersSlice.reducer,
        products: productsSlice.reducer,
        toast: toastSlice.reducer,
        confirm: confirmSlice.reducer,
    },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        cart: JSON.parse(localStorage.getItem('carts')) || [],
        menuList: [],
        totalMoney: 0,
    },
    reducers: {
        setProducts(state, action) {
            const exitProduct = state.cart.findIndex((item, index) => {
                return item.product_id === action.payload.product_id;
            });
            if (exitProduct !== -1) {
                state.cart[exitProduct].quantity += action.payload.quantity;
                state.cart[exitProduct].total += action.payload.total;
            } else {
                state.cart.push(action.payload);
            }
            localStorage.setItem('carts', JSON.stringify(state.cart));
        },
        removeProduct(state, action) {
            const productId = action.payload;

            state.cart = state.cart.filter((item) => item.product_id !== productId);
            localStorage.setItem('carts', JSON.stringify(state.cart));
        },
        updateTotalMoney(state) {
            if (Array.isArray(state.cart)) {
                state.totalMoney = state.cart.reduce((total, item) => total + item.total, 0);
            }
        },
        depositeMinus(state, action) {
            const productIndex = state.cart.findIndex((item) => item.product_id === action.payload);

            if (productIndex !== -1) {
                const product = state.cart[productIndex];

                if (product.quantity > 1) {
                    product.quantity -= 1;
                    product.total = product.quantity * product.price;
                }
            }
            localStorage.setItem('carts', JSON.stringify(state.cart));
        },
        depositePlus(state, action) {
            const productIndex = state.cart.findIndex((item) => item.product_id === action.payload);

            if (productIndex !== -1) {
                const product = state.cart[productIndex];

                product.quantity += 1;
                product.total = product.quantity * product.price;
            }
            localStorage.setItem('carts', JSON.stringify(state.cart));
        },
        setMenuList(state, action) {
            state.menuList = action.payload;
        },
    },
});

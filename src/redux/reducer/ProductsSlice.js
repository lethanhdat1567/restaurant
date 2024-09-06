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
            const { product_id, quantity, price, discount } = action.payload;

            // Tìm chỉ mục của sản phẩm trong giỏ hàng
            const exitProductIndex = state.cart.findIndex((item) => item.product_id === product_id);

            if (exitProductIndex !== -1) {
                // Sản phẩm đã tồn tại trong giỏ hàng
                const existingProduct = state.cart[exitProductIndex];

                // Cập nhật số lượng sản phẩm
                existingProduct.quantity += quantity;

                // Tính giá sau giảm giá
                const priceAfterDiscount = price - price * (discount / 100);

                // Cập nhật tổng giá của sản phẩm
                existingProduct.total = existingProduct.quantity * priceAfterDiscount;
            } else {
                // Sản phẩm chưa tồn tại trong giỏ hàng
                const priceAfterDiscount = price - price * (discount / 100);

                // Thêm sản phẩm mới vào giỏ hàng
                state.cart.push({
                    ...action.payload,
                    total: quantity * priceAfterDiscount,
                });
            }

            // Lưu trữ vào localStorage
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
                    const priceAfterDiscount = product.price - product.price * (product.discount / 100);
                    product.total = product.quantity * priceAfterDiscount;
                }
            }
            localStorage.setItem('carts', JSON.stringify(state.cart));
        },
        depositePlus(state, action) {
            const productIndex = state.cart.findIndex((item) => item.product_id === action.payload);

            if (productIndex !== -1) {
                const product = state.cart[productIndex];

                product.quantity += 1;
                const priceAfterDiscount = product.price - product.price * (product.discount / 100);
                product.total = product.quantity * priceAfterDiscount;
            }
            localStorage.setItem('carts', JSON.stringify(state.cart));
        },
        setMenuList(state, action) {
            state.menuList = action.payload;
        },
        destroyCart(state, action) {
            state.cart = [];
            localStorage.removeItem('carts');
        },
    },
});

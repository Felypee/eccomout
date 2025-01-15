// src/store.js

import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../../states/cart/slice';
export const ecommerceStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

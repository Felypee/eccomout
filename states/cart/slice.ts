import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: any, action) => {
            const product: any = action.payload;
            const existingProduct: any = state.items.find((item: any) => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },

        removeFromCart: (state: any, action) => {
            const productId = action.payload;
            state.items = state.items.filter((item: any) => item.id !== productId);
        },

        updateQuantity: (state: any, action) => {
            const { id, quantity } = action.payload;
            const existingProduct = state.items.find((item: any) => item.id === id);

            if (existingProduct) {
                existingProduct.quantity = quantity;
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

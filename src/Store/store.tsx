import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/cartSlice';

const store = configureStore({
    reducer: {
        products: cartReducer,
    }
});

export default store;
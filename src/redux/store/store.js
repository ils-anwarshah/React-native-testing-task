import { configureStore } from "@reduxjs/toolkit";
import CartCountReducer from "../reducer/CartCountReducers";
import CartItemReducer from "../reducer/CartItemReducer";

const store=configureStore({
    reducer:{
        cartcount: CartCountReducer,
        cartData: CartItemReducer
    }
});

export default store
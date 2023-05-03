import { combineReducers } from "@reduxjs/toolkit";
import CartCountReducer from "./CartCountReducers";

const rootReducer = combineReducers({
    cartcount: CartCountReducer
})
export default rootReducer
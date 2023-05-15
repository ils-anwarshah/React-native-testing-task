import CartCountReducer from "./CartCountReducers"
import CartItemReducer from "./CartItemReducer"
import { combineReducers } from "redux";

const reducer = combineReducers({
    cartcount:CartCountReducer,
    cartData:CartItemReducer,
})

export default reducer;
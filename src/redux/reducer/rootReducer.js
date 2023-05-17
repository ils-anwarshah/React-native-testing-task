import CartCountReducer from "./CartCountReducers"
import CartItemReducer from "./CartItemReducer"
import { combineReducers } from "redux";
import FetchPhotoReducer from "./PhotosFetchReducer";

const reducer = combineReducers({
    cartcount:CartCountReducer,
    cartData:CartItemReducer,
    PhotoData:FetchPhotoReducer,
})

export default reducer;
import { createStoreHook } from "react-redux";
import rootReducer from "../reducer/rootReducer";

const store=createStoreHook(rootReducer);

export default store
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import reducer from "../reducer/rootReducer";
import { Photos, FetchUserData } from "../../Saga/saga";

const sagaMiddleware = createSagaMiddleware();
const store=configureStore({
    reducer:reducer,
    middleware:()=>[sagaMiddleware]
}
    
);
    sagaMiddleware.run(Photos)


export default store ;
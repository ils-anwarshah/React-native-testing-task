import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import reducer from "../reducer/rootReducer";
import FetchPhotos from "../../Saga/saga";

const sagaMiddleware = createSagaMiddleware();
const store=configureStore({
    reducer:reducer,
    middleware:()=>[sagaMiddleware]
}
    
);
    sagaMiddleware.run(FetchPhotos)


export default store ;
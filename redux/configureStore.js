import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import logger from 'redux-logger';
import { watcherSaga } from "./saga/rootSaga";
import characterReducer from "./ducks/characterSlice";
import counterReducer from "./ducks/counterSlice";
// import counterSlice from "./counterSlice"

const devMode = process.env.NODE_ENV === 'development';

const reducer = combineReducers({
    counter: counterReducer,
    character: characterReducer
})
let middleware = []
const sagaMiddleware = createSagaMiddleware();

if (devMode) {
    middleware = (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware).concat(logger)
}
sagaMiddleware.run(watcherSaga)
const store = configureStore({
    reducer,
    middleware
})


export default store;
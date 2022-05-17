import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import counterReducer from "./ducks/counter";
import characterReducer from "./ducks/character";
import { watcherSaga } from "./saga/rootSaga";

const reducer = combineReducers({
    counter: counterReducer,
    character: characterReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducer, {}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store;
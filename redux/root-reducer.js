import { combineReducers } from "@reduxjs/toolkit";

import {
    reducer as characterReducer,
    slice as characterSlice,
} from "./features/characters/characters-reducer";

const combinedReducer = combineReducers({
    [characterSlice]: characterReducer,
});

const rootReducer = (state, action) => {
    return combinedReducer(state, action);
};

const rootState = rootReducer(undefined, {});

export { rootReducer, rootState };
import { createSlice } from "@reduxjs/toolkit";
import { pipe, prop } from "ramda";

const slice = "characters";

const initialState = {
    results: [],
    info: {},
    isLoading: false,
    error: null
};

export const {
    actions: { setCharacter, setError, setLoading },
    reducer,
} = createSlice({
    initialState,
    name: slice,
    reducers: {
        setCharacter: (state, { payload }) => ({ ...state, data: payload }),
        setLoading: (state, { payload }) => ({ ...state, isLoading: payload }),
        setError: (state, { payload }) => ({ ...state, error: payload }),
    },
});

const getCharacter = prop(slice);
const getLoadedCharacter = pipe(getCharacter, prop("characters"));
const getIsLoading = pipe(getCharacter, prop("isLoading"));
const getError = pipe(getCharacter, prop("error"));

export {
    getCharacter,
    getLoadedCharacter,
    getIsLoading,
    getError,
    slice,
};

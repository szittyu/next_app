import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
    name: "character",
    initialState: {
        info: {},
        results: []
    },
    reducers: {
        getCharacter() { },
        setCharacter(state, action) {
            const character = action.payload;
            return { ...state, ...character }
        }
    }
});

export const { getCharacter, setCharacter } = characterSlice.actions;

export default characterSlice.reducer;
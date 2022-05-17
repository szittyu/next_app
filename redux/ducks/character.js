export const GET_CHARACTER = "GET_CHARACTERR";
const SET_CHARACTER = "SET_CHARACTER";

export const getCharacter = () => ({
    type: GET_CHARACTER
});

export const setCharacter = (character) => ({
    type: SET_CHARACTER,
    character
});

const initialState = {
    character: undefined
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTER:
            const { character } = action
            return { ...state, character };
        default:
            return state;
    }
};
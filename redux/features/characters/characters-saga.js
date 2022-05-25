import { call, put, takeEvery } from "redux-saga/effects";

import {
    setCharacter,
    setError,
    setLoading
} from "./characters-reducer";

import { getAllCharacters } from "redux/features/requestApi/character";


const requestAllCharacters = async () => {
    try {
        const res = await getAllCharacters();
        return res;
    } catch (error) {
        console.log(error.message);
    }
};

function* handleRequestAllCharacters() {
    yield put(setLoading(true));
    try {
        const characters = yield call(requestAllCharacters);
        const { data } = characters;
        yield put(setCharacter({ ...data }))
    } catch (error) {
        setError(error.message);
    }
    yield put(setLoading(false));
}

function* watchGetCharacters() {
    yield takeEvery(getCharacter.type, handleRequestAllCharacters);
}

const getCharacter = () => ({
    type: getCharacter.type
});
getCharacter.type = "character";

export {
    getCharacter,
    watchGetCharacters,
};
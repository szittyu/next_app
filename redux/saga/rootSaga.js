import { takeLatest } from "redux-saga/effects"
import { handleGetCharacter } from "./handlers/character"
import { getCharacter } from "../ducks/characterSlice"

export function* watcherSaga() {
    yield takeLatest(getCharacter.type, handleGetCharacter)
}
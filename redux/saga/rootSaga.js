import { takeEvery } from "redux-saga/effects"
import { handleGetCharacter } from "./handlers/character"
import { GET_CHARACTER } from "../ducks/character"

export function* watcherSaga() {
    yield takeEvery(GET_CHARACTER, handleGetCharacter)
}
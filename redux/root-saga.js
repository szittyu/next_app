import { all } from "redux-saga/effects";

import {
    watchGetCharacters
} from "../redux/features/characters/characters-saga";

function* rootSaga() {
    yield all([
        watchGetCharacters(),
    ]);
}

export { rootSaga };
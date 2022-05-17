import { setCharacter } from "redux/ducks/character";
import { call, put } from "redux-saga/effects"
import { requestGetCharacter } from "../requests/character";

export function* handleGetCharacter(action) {
    try {
        const response = yield call(requestGetCharacter);
        const { data } = response;
        yield put(setCharacter(data))
    }
    catch (error) {
        console.log(error);
    }
}
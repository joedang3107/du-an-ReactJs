import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* fetchUserName(action) {
    try {
        let data = yield call(Api.fetchUser, action.payload);
        console.log(data);
        yield put({
            type: type.FETCH_USER_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_USER_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.FETCH_USER, fetchUserName);
}

export default mySaga;
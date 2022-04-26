import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* addPfm(action) {
    try {
        yield call(Api.addPfm, action.payload);
        yield put({
            type: type.ADD_PFM_SUCCEEDED,
        });
    } catch (e) {
        yield put({ type: type.ADD_PFM_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.ADD_PFM, addPfm);
}

export default mySaga;
import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* addPfmPage3(action) {
    try {
        yield call(Api.addPfm3, action.payload);
        yield put({
            type: type.ADD_PFM_3_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.ADD_PFM_3_FAILED, message: e.message });
    }
}

function* fetchPfms(action) {
    try {
        let data = yield call(Api.fetchPfm3, action.payload);
        yield put({
            type: type.FETCH_PFM_3_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFM_3_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.ADD_PFM_3, addPfmPage3);
    yield takeEvery(type.FETCH_PFM_3, fetchPfms);
}

export default mySaga;
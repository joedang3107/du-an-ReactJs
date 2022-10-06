import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* addPfmPage2(action) {
    try {
        yield call(Api.addPfm2, action.payload);
        yield put({
            type: type.ADD_PFM_2_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.ADD_PFM_2_FAILED, message: e.message });
    }
}

function* fetchPfms(action) {
    try {
        let data = yield call(Api.fetchPfm2, action.payload);
        yield put({
            type: type.FETCH_PFM_2_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFM_2_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.ADD_PFM_2, addPfmPage2);
    yield takeEvery(type.FETCH_PFM_2, fetchPfms);
}

export default mySaga;
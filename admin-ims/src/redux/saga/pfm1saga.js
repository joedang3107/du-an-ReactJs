import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* addPfmPage1(action) {
    try {
        yield call(Api.addPfm1, action.payload);
        yield put({
            type: type.ADD_PFM_1_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.ADD_PFM_1_FAILED, message: e.message });
    }
}

function* deletePfmPage1(action) {
    try {
        yield call(Api.deletePfm1, action.payload);
        yield put({
            type: type.DELETE_PFM_1_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.DELETE_PFM_1_FAILED, message: e.message });
    }
}

function* fetchPfms(action) {
    try {
        let data = yield call(Api.fetchPfm1, action.payload);
        yield put({
            type: type.FETCH_PFM_1_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFM_1_FAILED, message: e.message });
    }
}


function* mySaga() {
    yield takeEvery(type.ADD_PFM_1, addPfmPage1);
    yield takeEvery(type.DELETE_PFM_1, deletePfmPage1);
    yield takeEvery(type.FETCH_PFM_1, fetchPfms);
}

export default mySaga;
import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from "../../apis"
import * as type from "../const"

function* addPfmPage4(action) {
    try {
        yield call(Api.addPfm4, action.payload);
        yield put({
            type: type.ADD_PFM_4_SUCCEEDED
        });
    } catch (e) {
        yield put({ type: type.ADD_PFM_4_FAILED, message: e.message });
    }
}


function* fetchPfms(action) {
    try {
        let data = yield call(Api.fetchPfm4, action.payload);
        yield put({
            type: type.FETCH_PFM_4_SUCCEEDED, payload: {data}
        });
    } catch (e) {
        yield put({ type: type.FETCH_PFM_4_FAILED, message: e.message });
    }
}

function* mySaga() {
    yield takeEvery(type.ADD_PFM_4, addPfmPage4);
    yield takeEvery(type.FETCH_PFM_4, fetchPfms);
}

export default mySaga;
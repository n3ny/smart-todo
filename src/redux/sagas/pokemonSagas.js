import { put, call, takeLatest, all } from "redux-saga/effects";
import { GET_POCKEMONS_START, GET_POCKEMONS_SUCCESS, GET_POCKEMONS_FAILD, GET_POCKEMONS_END } from '../actions/pockemon'
import apiCall from "../utilities";
//put: dispara las acciones
//takelastest : escucha que se disparen las actions
//call : para llamar al api

export function* getPockemons({ payload }) {
    try {
        const response = yield call(apiCall, 'GET', 'http://jsonplaceholder.typicode.com/users');
        yield put({type: GET_POCKEMONS_SUCCESS, payload: response});
    } catch (error) {
        yield put({type: GET_POCKEMONS_FAILD, payload: error});
        console.log('error', error);
    } finally {
        yield put({type: GET_POCKEMONS_END});
    }
}

/** Watcher */
export default function* pockemons() { /* esta función exportará todas las sagas */
    yield takeLatest(GET_POCKEMONS_START, getPockemons);
}
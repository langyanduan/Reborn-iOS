import { call, put, fork, take, takeEvery, takeLatest } from "redux-saga/effects";

import * as StorePromise from "../storage";
import * as ServerActions from "./server/action";
import * as ConfigActions from "./config/action";
import * as GeneralActions from "./general/action";

function* loadServerListAsync() {
  const serverList = yield call(StorePromise.fetchServerList);
  yield put(ServerActions.setServerList(serverList));
}

function* addServerAsync(action) {
  yield call(StorePromise.addServer, action.values);
  yield [
    call(loadServerListAsync),
    call(loadGeneralAsync),
  ]
}

function* modifyServerAsync(action) {
  yield call(StorePromise.modifyServer, action.uuid, action.values);
  yield call(loadServerListAsync);
}

function* deleteServerAsync(action) {
  yield call(StorePromise.deleteServer, action.uuid);
  yield [
    call(loadServerListAsync),
    call(loadGeneralAsync),
  ]
}

function* setCurrentServerAsync(action) {
  yield call(StorePromise.setGeneral, {currentServer: action.uuid});
  yield call(loadGeneralAsync);
}

function* loadConfigListAsync() {
  const configList = yield call(StorePromise.fetchConfigList)
  yield put(ConfigActions.setConfigList(configList));
}

function* loadGeneralAsync() {
  const general = yield call(StorePromise.getGeneral);
  yield put(GeneralActions.setCurrentServerSuccess(general.currentServer));
  // yield put(ConfigActions.setCurrentConfigSuccess(general.currentConfig));
}


function fetchServerDetail() {

}

function fetchConfigDetail() {

}

export default function* rootSaga() {
  yield [
    takeLatest(ServerActions.LOAD_SERVER_LIST, loadServerListAsync),
    takeLatest(ServerActions.ADD_SERVER, addServerAsync),
    takeLatest(ServerActions.MOD_SERVER, modifyServerAsync),
    takeLatest(ServerActions.DEL_SERVER, deleteServerAsync),

    takeLatest(ConfigActions.LOAD_CONFIG_LIST, loadConfigListAsync),

    takeLatest(GeneralActions.LOAD_GENERAL, loadGeneralAsync),
    takeLatest(GeneralActions.SET_CURRENT_SERVER_REQUESTED, setCurrentServerAsync),
  ]
}
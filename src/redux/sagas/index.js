import { call, put, fork, take, takeEvery, takeLatest } from "redux-saga/effects";

import * as StorePromise from "../../storage";
import * as ServerActions from "../server/action";
import * as ConfigActions from "../config/action";
import * as GeneralActions from "../general/action";

// Server

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

// Config

function* loadConfigListAsync() {
  const configList = yield call(StorePromise.fetchConfigList)
  yield put(ConfigActions.setConfigList(configList));
}

function* addConfigAsync(action) {
  yield call(StorePromise.addConfig, action.values);
  yield [
    call(loadConfigListAsync),
    call(loadGeneralAsync),
  ]
}

function* modifyConfigAsync(action) {
  yield call(StorePromise.modifyConfig, action.uuid, action.values);
  yield call(loadConfigListAsync);
}

function* deleteConfigAsync(action) {
  yield call(StorePromise.deleteConfig, action.uuid);
  yield [
    call(loadConfigListAsync),
    call(loadGeneralAsync),
  ]
}
// General 

function* loadGeneralAsync() {
  const general = yield call(StorePromise.getGeneral);
  yield put(GeneralActions.setCurrentServerSuccess(general.currentServer));
  yield put(GeneralActions.setCurrentConfigSuccess(general.currentConfig));
  yield put(GeneralActions.setGlobalRoutingSuccess(general.globalRouting));
  yield put(GeneralActions.setLanguageSuccessed(general.currentLanguage));
}

function* setCurrentServerAsync(action) {
  yield call(StorePromise.setGeneral, {currentServer: action.uuid});
  yield call(loadGeneralAsync);
}

function* setCurrentConfigAsync(action) {
  yield call(StorePromise.setGeneral, {currentConfig: action.uuid});
  yield call(loadGeneralAsync);
}

function* setGlobalRoutingAsync(action) {
  yield call(StorePromise.setGeneral, {globalRouting: action.routing});
  yield call(loadGeneralAsync);
}

function* setCurrentLanguageAsync(action) {
  yield call(StorePromise.setGeneral, {currentLanguage: action.language});
  yield call(loadGeneralAsync);
}

// function fetchServerDetailAsync() { }
// function fetchConfigDetailAsync() { }

export default function* rootSaga() {
  yield [
    takeLatest(ServerActions.LOAD_SERVER_LIST, loadServerListAsync),
    takeLatest(ServerActions.ADD_SERVER, addServerAsync),
    takeLatest(ServerActions.MOD_SERVER, modifyServerAsync),
    takeLatest(ServerActions.DEL_SERVER, deleteServerAsync),

    takeLatest(ConfigActions.LOAD_CONFIG_LIST, loadConfigListAsync),
    takeLatest(ConfigActions.ADD_CONFIG, addConfigAsync),
    takeLatest(ConfigActions.MOD_CONFIG, modifyConfigAsync),
    takeLatest(ConfigActions.DEL_CONFIG, deleteConfigAsync),

    takeLatest(GeneralActions.LOAD_GENERAL, loadGeneralAsync),
    takeLatest(GeneralActions.SET_CURRENT_SERVER_REQUESTED, setCurrentServerAsync),
    takeLatest(GeneralActions.SET_CURRENT_CONFIG_REQUESTED, setCurrentConfigAsync),
    takeLatest(GeneralActions.SET_LANGUAGE_REQUESTED, setCurrentLanguageAsync),
    takeLatest(GeneralActions.SET_GLOBAL_ROUTING_REQUESTED, setGlobalRoutingAsync),
  ]
}
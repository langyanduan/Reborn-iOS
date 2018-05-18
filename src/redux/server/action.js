export const ADD_SERVER = 'SERVER/ADD_SERVER';
export const DEL_SERVER = 'SERVER/DEL_SERVER';
export const MOD_SERVER = 'SERVER/MOD_SERVER';
export const SET_SERVER_LIST = 'SERVER/SET_SERVER_LIST';
export const LOAD_SERVER_LIST = 'SERVER/LOAD_SERVER_LIST';

export function addServer(values) {
  return {
    type: ADD_SERVER,
    values,
  }
}

export function deleteServer(uuid) {
  return {
    type: DEL_SERVER,
    uuid,
  }
}

export function modifyServer(uuid, values) {
  return {
    type: MOD_SERVER,
    uuid,
    values,
  }
}

export function setServerList(serverList) {
  return {
    type: SET_SERVER_LIST,
    serverList,
  }
}

export function loadServerList() {
  return {
    type: LOAD_SERVER_LIST,
  }
}
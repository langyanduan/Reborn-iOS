export const SET_CURRENT_SERVER = 'SERVER/SET_CURRENT_SERVER';
export const ADD_SERVER = 'SERVER/ADD_SERVER';
export const DEL_SERVER = 'SERVER/DEL_SERVER';
export const MOD_SERVER = 'SERVER/MOD_SERVER';
export const SET_SERVER_LIST = 'SERVER/SET_SERVER_LIST'

export function setCurrentServer(uuid) {
  return {
    type: SET_CURRENT_SERVER,
    uuid,
  }
}

export function addServer(uuid, values) {
  return {
    type: ADD_SERVER,
    uuid,
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
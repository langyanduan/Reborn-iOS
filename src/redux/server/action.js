export const ADD_SERVER = 'SERVER/ADD_SERVER';
export const DEL_SERVER = 'SERVER/DEL_SERVER';
export const MOD_SERVER = 'SERVER/MOD_SERVER';

export function addServer() {
  return {
    type: ADD_SERVER,
  }
}

export function deleteServer(uuid) {
  return {
    type: DEL_SERVER,
  }
}

export function modifyServer(uuid) {
  return {
    type: MOD_SERVER,
  }
}
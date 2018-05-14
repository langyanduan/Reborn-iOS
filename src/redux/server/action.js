export const ADD_SERVER = 'ADD_SERVER';
export const DEL_SERVER = 'DEL_SERVER';
export const MOD_SERVER = 'MOD_SERVER';

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
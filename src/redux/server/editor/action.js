export const SET_TYPE = 'SET_TYPE';
export const SET_SERVER = 'SET_SERVER';
export const SET_PORT = 'SET_PORT';
export const SET_METHOD = 'SET_METHOD';
export const SET_ACCOUNT = 'SET_ACCOUNT';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_TCP_FAST_OPEN = 'SET_TCP_FAST_OPEN';

export function setType(type) {
  return {
    type: SET_TYPE,
    serverType: type,
  }
}

export function setServer(server) {
  return {
    type: SET_SERVER,
    server,
  }
}

export function setPort(port) {
  return {
    type: SET_PORT,
    port,
  }
}

export function setMethod(method) {
  return {
    type: SET_METHOD,
    method,
  }
}

export function setAccount(account) {
  return {
    type: SET_ACCOUNT,
    account,
  }
}

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password,
  }
}
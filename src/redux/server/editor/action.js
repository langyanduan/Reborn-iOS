export const SET_TYPE     = 'SERVER/EDITOR/SET_TYPE';
export const SET_SERVER   = 'SERVER/EDITOR/SET_SERVER';
export const SET_PORT     = 'SERVER/EDITOR/SET_PORT';
export const SET_METHOD   = 'SERVER/EDITOR/SET_METHOD';
export const SET_ACCOUNT  = 'SERVER/EDITOR/SET_ACCOUNT';
export const SET_PASSWORD = 'SERVER/EDITOR/SET_PASSWORD';
export const SET_TCP_FAST_OPEN = 'SERVER/EDITOR/SET_TCP_FAST_OPEN';

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
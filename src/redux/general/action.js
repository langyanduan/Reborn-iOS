export const SET_CURRENT_SERVER_REQUESTED = 'GENERAL/SET_CURRENT_SERVER_REQUESTED';
export const SET_CURRENT_SERVER_SUCCESSED = 'GENERAL/SET_CURRENT_SERVER_SUCCESSED';
export const SET_CURRENT_CONFIG_REQUESTED = 'GENERAL/SET_CURRENT_CONFIG_REQUESTED';
export const SET_CURRENT_CONFIG_SUCCESSED = 'GENERAL/SET_CURRENT_CONFIG_SUCCESSED';
export const SET_LANGUAGE_REQUESTED = 'GENERAL/SET_LANGUAGE_REQUESTED';
export const SET_LANGUAGE_SUCCESSED = 'GENERAL/SET_LANGUAGE_SUCCESSED';
export const SET_GLOBAL_ROUTING_REQUESTED = 'GENERAL/SET_GLOBAL_ROUTING_REQUESTED';
export const SET_GLOBAL_ROUTING_SUCCESSED = 'GENERAL/SET_GLOBAL_ROUTING_SUCCESSED';
export const SET_VPN_STATE = 'GENERAL/SET_VPN_STATE';
export const LOAD_GENERAL = 'GENERAL/LOAD_GENERAL';

export function setGlobalRoutingRequest(routing) {
  return {
    type: SET_GLOBAL_ROUTING_REQUESTED,
    routing,
  }
}

export function setGlobalRoutingSuccess(routing) {
  return {
    type: SET_GLOBAL_ROUTING_SUCCESSED,
    routing,
  }
}

export function setCurrentServerRequest(uuid) {
  return {
    type: SET_CURRENT_SERVER_REQUESTED,
    uuid,
  }
}

export function setCurrentServerSuccess(uuid) {
  return {
    type: SET_CURRENT_SERVER_SUCCESSED,
    uuid,
  }
}

export function setCurrentConfigRequest(uuid) {
  return {
    type: SET_CURRENT_CONFIG_REQUESTED,
    uuid,
  }
}

export function setCurrentConfigSuccess(uuid) {
  return {
    type: SET_CURRENT_CONFIG_SUCCESSED,
    uuid,
  }
}

export function setLanguageRequested(language) {
  return {
    type: SET_LANGUAGE_REQUESTED,
    language,
  };
}

export function setLanguageSuccessed(language) {
  return {
    type: SET_LANGUAGE_SUCCESSED,
    language,
  };
}

export function setVPNState(vpnOn) {
  return {
    type: SET_VPN_STATE,
    vpnOn,
  };
}

export function loadGeneral() {
  return {
    type: LOAD_GENERAL,
  }
}
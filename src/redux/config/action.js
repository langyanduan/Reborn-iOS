export const SET_CURRENT_CONFIG = 'CONFIG/SET_CURRENT_CONFIG';
export const SET_CONFIG_LIST = 'CONFIG/SET_CONFIG_LIST';
export const ADD_CONFIG = 'CONFIG/ADD_CONFIG';
export const DEL_CONFIG = 'CONFIG/DEL_CONFIG';
export const MOD_CONFIG = 'CONFIG/MOD_CONFIG';
export const DUP_CONFIG = 'CONFIG/DUP_CONFIG';


export function setCurrentConfig(uuid) {
  return {
    type: SET_CURRENT_CONFIG,
    uuid,
  }
}

export function setConfigList(configList) {
  return {
    type: SET_CONFIG_LIST,
    configList,
  }
}


export function addConfig(uuid, values) {
  return {
    type: ADD_CONFIG,
    uuid,
    values,
  }
}

export function deleteConfig(uuid) {
  return {
    type: DEL_CONFIG,
    uuid,
  }
}

export function modifyConfig(uuid, values) {
  return {
    type: MOD_CONFIG,
    uuid,
    values,
  }
}

export function duplicateConfig(uuid) {
  return {
    type: DUP_CONFIG,
    uuid,
  }
}

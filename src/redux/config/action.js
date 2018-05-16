export const ADD_CONF = 'CONFIG/ADD_CONF';
export const DEL_CONF = 'CONFIG/DEL_CONF';
export const MOD_CONF = 'CONFIG/MOD_CONF';
export const DUP_CONF = 'CONFIG/DUP_CONF';

export function addConfig() {
  return {
    type: ADD_CONF,
  }
}

export function deleteConfig(uuid) {
  return {
    type: DEL_CONF,
  }
}

export function modifyConfig(uuid) {
  return {
    type: MOD_CONF,
  }
}

export function duplicateConfig(uuid) {
  return {
    type: DUP_CONF,
  }
}

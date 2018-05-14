export const ADD_CONF = 'ADD_CONF';
export const DEL_CONF = 'DEL_CONF';
export const MOD_CONF = 'MOD_CONF';
export const DUP_CONF = 'DUP_CONF';

export function addConfig() {
  return {
    type: ADD_CONF,
  }
}

export function deleteConfig() {
  return {
    type: DEL_CONF,
  }
}

export function modifyConfig() {
  return {
    type: MOD_CONF,
  }
}

export function duplicateConfig() {
  return {
    type: DUP_CONF,
  }
}

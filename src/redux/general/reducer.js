import { SET_LANGUAGE_SUCCESSED, SET_CURRENT_CONFIG_SUCCESSED, SET_CURRENT_SERVER_SUCCESSED } from "./action";

const initialState = {
  currentServer: '',
  currentConfig: '',

  vpnOn: false,
  globalRouting: 'config',

  currentLanguage: 'English',
  pingMethod: 'ICMP',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SERVER_SUCCESSED:
      return {
        ...state,
        currentServer: action.uuid,
      }
    case SET_CURRENT_CONFIG_SUCCESSED:
      return {
        ...state,
        currentConfig: action.uuid,
      }
    case SET_LANGUAGE_SUCCESSED:
      return {
        ...state,
        currentLanguage: action.language
      }
    default:
      return state;
  }
}

export default reducer;

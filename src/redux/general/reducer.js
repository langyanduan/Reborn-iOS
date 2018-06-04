import { SET_LANGUAGE_SUCCESSED, SET_CURRENT_CONFIG_SUCCESSED, SET_CURRENT_SERVER_SUCCESSED, SET_GLOBAL_ROUTING_SUCCESSED, SET_VPN_STATE } from "./action";

const initialState = {
  currentServer: '',
  currentConfig: '',

  vpnOn: false,
  globalRouting: '',

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
    case SET_GLOBAL_ROUTING_SUCCESSED:
      return {
        ...state,
        globalRouting: action.routing,
      }
    case SET_VPN_STATE:
      return {
        ...state,
        vpnOn: action.vpnOn,
      }
    default:
      return state;
  }
}

export default reducer;

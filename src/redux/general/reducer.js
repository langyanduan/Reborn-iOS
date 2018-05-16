import { SET_LANGUAGE } from "./action";

const initialState = {
  vpnOn: false,
  globalRouting: 'config',

  language: 'English',
  pingMethod: 'ICMP',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
    default:
      return state;
  }
}

export default reducer;

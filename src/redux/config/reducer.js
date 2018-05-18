import { ADD_CONFIG, DEL_CONFIG, MOD_CONFIG, DUP_CONFIG, SET_CONFIG_LIST } from "./action";

const initialState = {
  configList: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONFIG_LIST:
      return {
        ...state,
        configList: action.configList,
      }
    case ADD_CONFIG:
    case DEL_CONFIG:
    case MOD_CONFIG:
    case DUP_CONFIG:
    default:
      return state;
  }
}
export default reducer;
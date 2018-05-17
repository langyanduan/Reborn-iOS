import { ADD_SERVER, DEL_SERVER, MOD_SERVER, SET_CURRENT_SERVER, SET_SERVER_LIST } from "./action";

const initialState = {
  current: null,
  serverList: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SERVER:
      return {
        ...state,
        current: action.uuid
      }
    case SET_SERVER_LIST:
      return {
        ...state,
        serverList: action.serverList
      }
    case ADD_SERVER:
      return {
        ...state,
        serverList: [...state.serverList, {...action.values, uuid: action.uuid}]
      }
    case DEL_SERVER:
    case MOD_SERVER:
    default:
      return state;
  }
}

export default reducer;
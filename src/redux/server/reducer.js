import { ADD_SERVER, DEL_SERVER, MOD_SERVER, SET_SERVER_LIST, LOAD_SERVER_LIST } from "./action";

const initialState = {
  serverList: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SERVER_LIST:
      return {
        ...state,
        serverList: action.serverList
      }
    case ADD_SERVER:
    case DEL_SERVER:
    case MOD_SERVER:
    default:
      return state;
  }
}

export default reducer;
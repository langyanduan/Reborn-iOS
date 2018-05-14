import { ADD_CONF, DEL_CONF, MOD_CONF, DUP_CONF } from "./action";

const initialState = {
  selected: null,
  list: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONF:
    case DEL_CONF:
    case MOD_CONF:
    case DUP_CONF:
    default:
      return state;
  }
}
export default reducer;
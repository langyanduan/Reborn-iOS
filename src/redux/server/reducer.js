import { ADD_SERVER, DEL_SERVER, MOD_SERVER } from "./action";

// const initialState = {
//   selected: null,
//   list: []
// };

const initialState = {
  selected: '12345',
  list: [
    {
      name: 'abcd',
      uuid: '12345',
    },
    {
      name: 'abcd',
      uuid: '12346',
    },
    {
      name: 'abcd',
      uuid: '42346',
    },
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVER:
    case DEL_SERVER:
    case MOD_SERVER:
    default:
      return state;
  }
}

export default reducer;

const initialState = {
  type: 'Shadowsocks',
  server: '',
  port: '',
  method: 'rc4-md5',
  password: '',
  tcpFastOpen: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default reducer;
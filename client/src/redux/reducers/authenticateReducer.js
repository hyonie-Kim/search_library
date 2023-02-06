let initialState = {
  id: "",
  password: "",
  authenticate: false, //초기값은 false
};
function authenticateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("Login success reducer");
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    default:
      return { ...state };
  }
}
export default authenticateReducer;

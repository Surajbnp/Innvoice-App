import * as types from "./actionTypes";

const initialState = {
  products : [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_USER_REQUEST:
      return {
        isLoading: true,
        isErrror : false
      };
      case types.LOGIN_USER_SUCCESS:
      return {
        isLoading: false,
        isErrror : false
      };
    default:
      return state;
  }
};

export { reducer };

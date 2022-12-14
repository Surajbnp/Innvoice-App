import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_USER_REQUEST:
      return {
        isLoading: true,
        isErrror: false,
      };

    case types.LOGIN_USER_SUCCESS:
      return {
        isLoading: false,
        isErrror: false,
      };

    case types.SIGNUP_USER_REQUEST:
      return {
        isLoading: true,
        isError: false,
      };

    case types.SIGNUP_USER_SUCCESS:
      return {
        isLoading: false,
        isError: false,
      };

    case types.GET_PRODUCT_REQUEST:
      return {
        isLoading: true,
        isError: false,
      };

    case types.GET_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        products: payload,
        isError: false,
      };
    case types.GET_PRODUCT_FAILURE:
      return {
        isLoading: false,
        isError: true,
      };
    case types.CREATE_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
      };
    case types.DELETE_PRODUCT_SUCCESS:
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      case types.EDIT_PRODUCT_SUCCESS:

    default:
      return state;
  }
};

export { reducer };

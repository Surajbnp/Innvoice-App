import * as types from "./actionTypes";

const initialState = {
  users: [],
  cart: [],
  bill: [],
  currBill: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        isLoading: false,
      };

    case types.GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.DELETE_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.DELETE_USERS_FAILURE:
      return {
        ...state,
        users: payload,
        isLoading: false,
        isError: true,
      };

    case types.ADD_USERS_SUCCESS:
      return {
        ...state,
      };

    case types.SINGLE_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
      };

    case types.EDIT_USERS_SUCCESS:
    case types.SEARCH_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        isLoading: false,
      };
    case types.GET_CART_SUCCESS:
      return {
        cart: payload,
      };
    case types.DELETE_CART_SUCCESS:
      return {
        ...state,
      };

    case types.ADD_BILL_SUCCESS:
      return {
        ...state,
        bill: payload,
      };
    case types.ADD_BILL_FAILURE:
      return {
        ...state,
        isError: payload,
      };
    case types.GET_BILL_SUCCESS:
      return {
        ...state,
        bill: payload,
      };
    case types.GET_SINGLE_BILL_SUCCESS:
      return {
        ...state,
        currBill: payload,
      };
    case types.EDIT_BILL_SUCCESS:
      return {
        ...state,
      }  

    case types.DELETE_BILL_SUCCESS:
      return {
        ...state,
        bill: payload,
      }  
    default:
      return state;
  }
};

export { reducer };

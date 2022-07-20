import * as types from "./actionTypes";

const initialState = {
  users: [],
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
        users:payload,
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
          users:payload
        }

        case types.EDIT_USERS_SUCCESS:
    default:
      return state;
  }
};

export { reducer };

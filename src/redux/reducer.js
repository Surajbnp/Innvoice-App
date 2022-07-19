import * as types from "./actionTypes";

const initialState = {
  users: [],
  isLoading: false,
  isError:false
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
            isLoading:false,
            isError:true,
        }
    default:
      return state;
  }
};

export { reducer };

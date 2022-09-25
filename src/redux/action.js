import * as types from "./actionTypes";
import axios from "axios";
import env from "react-dotenv";

// const loadUser = () => (dispatch) => {
//   const devEnv = process.env.NODE_ENV !== "production";
//   const { REACT_APP_PROD_URL, REACT_APP_DEV_URL } = process.env;

//   return axios
//     .get(
//       `${devEnv}` ? `${REACT_APP_PROD_URL}users` : `${REACT_APP_DEV_URL}users`
//     )
//     .then((res) => {
//       console.log(res.data);
//       return dispatch({ type: types.GET_USERS_SUCCESS, payload: res.data });
//     })
//     .catch((err) => dispatch({ type: types.GET_USERS_FAILURE, payload: err }));
// };
const url = 'localhost:8080'

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_USER_REQUEST });
  fetch(`${url}/login`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload 
  }).then((res) => res.json()).then((res) => console.log(res))
};

export { login };

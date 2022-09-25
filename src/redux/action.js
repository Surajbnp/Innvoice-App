import * as types from "./actionTypes";
import axios from "axios";
let token = localStorage.getItem("token")


const login = (pay) => (dispatch) => {
  dispatch({ type: types.LOGIN_USER_REQUEST });
  return axios.post("/login", pay).then((res) => {
    return dispatch({type : types.LOGIN_USER_SUCCESS, token : res.data.token})
  }).catch((err) => {
    console.log(err);
   return dispatch({type : types.LOGIN_USER_FAILURE})
  })
};

const signup = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_USER_REQUEST });
  
  return axios.post("/signup", payload).then((res) => {
    return dispatch({type : types.SIGNUP_USER_SUCCESS})
  }).catch((err) => {
    console.log(err);
   return dispatch({type : types.SIGNUP_USER_FAILURE})
  })
};


const getProduct= (token) => dispatch => {
  dispatch({type : types.GET_PDODUCT_SUCCESS})
  return  axios.get('/products',
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
         Authorization : token
      }
  }).then((res) => {
    return dispatch({type : types.GET_PDODUCT_SUCCESS, payload : res.data})
  }).catch((err) => {
    console.log(err);
   return dispatch({type : types.GET_PRODUCT_FAILURE})
  })
}

export { login, signup, getProduct };

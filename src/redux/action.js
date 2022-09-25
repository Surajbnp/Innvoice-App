import * as types from "./actionTypes";
import axios from "axios";
import { useCallback } from "react";

const login = (pay) => (dispatch) => {
  dispatch({ type: types.LOGIN_USER_REQUEST });
  return axios
    .post("/login", pay)
    .then((res) => {
      return dispatch({
        type: types.LOGIN_USER_SUCCESS,
        token: res.data.token,
      });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.LOGIN_USER_FAILURE });
    });
};

const signup = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_USER_REQUEST });

  return axios
    .post("/signup", payload)
    .then((res) => {
      return dispatch({ type: types.SIGNUP_USER_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.SIGNUP_USER_FAILURE });
    });
};

const getProduct = (token) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_SUCCESS });
  return axios
    .get("/products", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((res) => {
      return dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCT_FAILURE, err: err });
    });
};

const createProduct = (token, payload) => (dispatch) => {
  dispatch({ type: types.CREATE_PRODUCT_REQUEST });

  return axios
    .post("/products/create", payload, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((res) => {
      return dispatch({ type: types.CREATE_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.CREATE_PRODUCT_FAILURE });
    });
};

const deleteProduct = (id, token) => (dispatch) => {
  dispatch({ type: types.DELETE_PRODUCT_REQUEST });

  return axios
    .delete(`/products/delete/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((res) => {
      return dispatch({ type: types.DELETE_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.DELETE_PRODUCT_FAILURE });
    });
};

const singleProd = (id, token) => (dispatch) => {
  return axios
    .get(`/products/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((res) => {
      return dispatch({ type: types.GET_SINGLE_PRODUCT_SUCCESS , payload : res.data });
    })
    .catch((err) => {
      console.log(err)
    });
};

export { login, signup, getProduct, createProduct, deleteProduct, singleProd };

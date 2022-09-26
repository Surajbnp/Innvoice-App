import * as types from "./actionTypes";
import axios from "axios";
import { useCallback } from "react";

// login Functionality

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

// Signup Functionality

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


// Getting product Function

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


// Adding New Products 

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

// Deleting The products

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

// Getting the single products

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

// Editing the products

const editProd = (id, token, pay) => (dispatch) => {
  dispatch({ type: types.EDIT_PRODUCT_REQUEST });

  return axios
    .patch(`/products/edit/${id}`,pay, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then((res) => {
      return dispatch({ type: types.EDIT_PRODUCT_SUCCESS , payload : res.data});
    })
    .catch((err) => {
      return dispatch({ type: types.EDIT_PRODUCT_FAILURE , err: err});
    });
};

export { login, signup, getProduct, createProduct, deleteProduct, singleProd, editProd };

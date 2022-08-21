import * as types from "./actionTypes";
import axios from "axios";

const loadUser = () => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;

  return axios
    .get(
      `${devEnv}` ? `${REACT_APP_DEV_URL}users` : `${REACT_APP_PROD_URL}users`
    )
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: types.GET_USERS_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: types.GET_USERS_FAILURE, payload: err }));
};

const delUser = (id) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  return axios
    .delete(
      `${devEnv}`
        ? `${REACT_APP_DEV_URL}users/${id}`
        : `${REACT_APP_PROD_URL}users/${id}`
    )
    .then((res) => {
      dispatch({ type: types.DELETE_USERS_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: types.DELETE_USERS_FAILURE, payload: err })
    );
};

const addUser = (d) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;

  return axios

    .post(
      `${devEnv}` ? `${REACT_APP_DEV_URL}users` : `${REACT_APP_PROD_URL}users`,
      d
    )
    .then((res) => {
      dispatch({ type: types.ADD_USERS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_USERS_FAILURE, payload: err });
    });
};

const getSingleUser = (id) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  return axios
    .get(
      `${devEnv}`
        ? `${REACT_APP_DEV_URL}users/${id}`
        : `${REACT_APP_PROD_URL}users/${id}`
    )
    .then((res) => {
      dispatch({ type: types.SINGLE_USERS_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: types.SINGLE_USERS_FAILURE, payload: err })
    );
};

const editUser = (id, data) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  console.log(id, data);
  return axios
    .put(
      `${devEnv}`
        ? `${REACT_APP_DEV_URL}users/${id}`
        : `${REACT_APP_PROD_URL}users/${id}`,
      data
    )
    .then(() => {
      //dispatch({ type: types.EDIT_USERS_SUCCESS});
    })
    .catch(() => {
      // dispatch({ type: types.EDIT_USERS_FAILURE });
    });
};

const searchProd = (query) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;

  return axios
    .get(
      `${devEnv}`
        ? `${REACT_APP_DEV_URL}users?q=${query}`
        : `${REACT_APP_PROD_URL}uesers?q=${query}`
    )
    .then((res) => {
      return dispatch({ type: types.SEARCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      return dispatch({ type: types.SEARCH_USERS_FAILURE });
    });
};

const addCart = (payload) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  return axios
    .post(
      `${devEnv}` ? `${REACT_APP_DEV_URL}cart` : `${REACT_APP_PROD_URL}cart`,
      payload
    )
    .then((res) => {
      return dispatch({ type: types.ADD_CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.ADD_CART_FAILURE, payload: err });
    });
};

const loadCart = () => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  return axios
    .get(`${devEnv}` ? `${REACT_APP_DEV_URL}cart` : `${REACT_APP_PROD_URL}cart`)
    .then((res) => {
      return dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CART_FAILURE, payload: err });
    });
};

const delCart = (id) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  return axios
    .delete(
      `${devEnv}`
        ? `${REACT_APP_DEV_URL}cart/${id}`
        : `${REACT_APP_PROD_URL}cart/${id}`
    )
    .then((res) => {
      return dispatch({ type: types.DELETE_CART_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: types.DELETE_CART_FAILURE, payload: err })
    );
};

const addBill = (d) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  return axios
    .post(
      `${devEnv}` ? `${REACT_APP_DEV_URL}bill` : `${REACT_APP_PROD_URL}bill`,
      d
    )
    .then((res) => {
      return dispatch({ type: types.ADD_BILL_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.ADD_BILL_FAILURE, payload: err });
    });
};

const loadBill = () => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  return axios
    .get(`${devEnv}` ? `${REACT_APP_DEV_URL}bill` : `${REACT_APP_PROD_URL}bill`)
    .then((res) => {
      return dispatch({ type: types.GET_BILL_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_BILL_FAILURE, payload: err });
    });
};

const singleBill = (id) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  return axios
    .get(
      `${devEnv}`
        ? `${REACT_APP_DEV_URL}bill/${id}`
        : `${REACT_APP_PROD_URL}bill/${id}`
    )
    .then((res) => {
      return dispatch({
        type: types.GET_SINGLE_BILL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => console.log(e));
};

const editBill = (id, data) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  return axios
    .put(
      `${devEnv}`
        ? `${REACT_APP_DEV_URL}bill/${id}`
        : `${REACT_APP_PROD_URL}bill/${id}`,
      data
    )
    .then(() => {
      return dispatch({ type: types.EDIT_BILL_SUCCESS });
    });
};

const delBill = (id) => (dispatch) => {
  const devEnv = process.env.NODE_ENV !== "production";
  const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
  return axios
    .delete(
      `${devEnv}`
        ? `${REACT_APP_DEV_URL}bill/${id}`
        : `${REACT_APP_PROD_URL}bill/${id}`
    )
    .then((res) => {
      return dispatch({ type: types.DELETE_BILL_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export {
  loadUser,
  delUser,
  delBill,
  editBill,
  loadBill,
  singleBill,
  addUser,
  getSingleUser,
  editUser,
  searchProd,
  addCart,
  loadCart,
  delCart,
  addBill,
};

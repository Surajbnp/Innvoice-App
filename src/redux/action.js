import * as types from "./actionTypes";
import axios from "axios";

const loadUser = () => (dispatch) => {
  return axios
    .get("/users")
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: types.GET_USERS_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: types.GET_USERS_FAILURE, payload: err }));
};

const delUser = (id) => (dispatch) => {
  return axios
    .delete(`/users/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_USERS_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: types.DELETE_USERS_FAILURE, payload: err })
    );
};

const addUser = (d) => (dispatch) => {
  return axios
    .post(`/users/`, d)
    .then((res) => {
      dispatch({ type: types.ADD_USERS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_USERS_FAILURE, payload: err });
    });
};

const getSingleUser = (id) => (dispatch) => {
  return axios
    .get(`/users/${id}`)
    .then((res) => {
      dispatch({ type: types.SINGLE_USERS_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: types.SINGLE_USERS_FAILURE, payload: err })
    );
};

const editUser = (id, data) => (dispatch) => {
  console.log(id, data);
  return axios
    .put(`/users/${id}`, data)
    .then(() => {
      //dispatch({ type: types.EDIT_USERS_SUCCESS});
    })
    .catch(() => {
      // dispatch({ type: types.EDIT_USERS_FAILURE });
    });
};

const searchProd = (query) => (dispatch) => {
  return axios
    .get(`/users/?q=${query}`)
    .then((res) => {
      return dispatch({ type: types.SEARCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      return dispatch({ type: types.SEARCH_USERS_FAILURE });
    });
};

const addCart = (payload) => (dispatch) => {
  return axios
    .post(`/cart`, payload)
    .then((res) => {
      return dispatch({ type: types.ADD_CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.ADD_CART_FAILURE, payload: err });
    });
};

const loadCart = () => (dispatch) => {
  return axios
    .get("/cart")
    .then((res) => {
      return dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CART_FAILURE, payload: err });
    });
};

const delCart = (id) => (dispatch) => {
  return axios
    .delete(`/cart/${id}`)
    .then((res) => {
      return dispatch({ type: types.DELETE_CART_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: types.DELETE_CART_FAILURE, payload: err })
    );
};

const addBill = (d) => (dispatch) => {
  return axios
    .post(`/bill`, d)
    .then((res) => {
      return dispatch({ type: types.ADD_BILL_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.ADD_BILL_FAILURE, payload: err });
    });
};

const loadBill = () => (dispatch) => {
  return axios
    .get("/bill")
    .then((res) => {
      return dispatch({ type: types.GET_BILL_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_BILL_FAILURE, payload: err });
    });
};

const singleBill = (id) => (dispatch) => {
  return axios
    .get(`/bill/${id}`)
    .then((res) => {
      return dispatch({
        type: types.GET_SINGLE_BILL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => console.log(e));
};

const editBill = (id, data) => (dispatch) => {
  return axios.put(`/bill/${id}`, data).then(() => {
    return dispatch({type : types.EDIT_BILL_SUCCESS})
  })
};

const delBill = (id) => (dispatch) => {
  return axios
    .delete(`/bill/${id}`)
    .then((res) => {
      return dispatch({ type: types.DELETE_BILL_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      console.log(err)
    );
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

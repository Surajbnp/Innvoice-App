import * as types from "./actionTypes";
import axios from "axios";

const loadUser = () => (dispatch) => {
  return axios
    .get("/users")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.GET_USERS_SUCCESS, payload: res.data });
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
  console.log(id, data)
  return axios
    .put(`/users/${id}`, data)
    .then(() => {
      //dispatch({ type: types.EDIT_USERS_SUCCESS});
    })
    .catch(() => {
     // dispatch({ type: types.EDIT_USERS_FAILURE });
    });
};

export { loadUser, delUser, addUser, getSingleUser, editUser };

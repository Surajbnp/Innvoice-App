import * as types from './actionTypes'
import axios from "axios"

const loadUser = () => (dispatch) => {
    return axios.get("http://localhost:8080/users").then((res) => {
        console.log(res.data)
        dispatch({type : types.GET_USERS_SUCCESS, payload: res.data})
    }).catch((err) => dispatch({type : types.GET_USERS_FAILURE, payload: err}))
}

export {loadUser}
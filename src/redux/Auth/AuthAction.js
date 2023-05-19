import { toast } from "react-toastify"
import { Login, LoginHandler } from "../services/Auth"
import { AUTH_ERROR, AUTH_LOGOUT, LOGIN_REQUEST, LOGIN_SUCCESS } from "./Constant"

export const LoginAction = (data, navigate) => async (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST
    })
    LoginHandler(data).then((res) => {
        console.log(res)
        if (res.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            navigate('/clinic/dashboard')
        } else {
            dispatch({
                type: AUTH_ERROR,
                payload: res
            })
        }
    }).catch((err) => {

    })
}


export const LogoutAction = () => (dispatch) => {
        dispatch({
            type: AUTH_LOGOUT,
            payload: {}
        })
}
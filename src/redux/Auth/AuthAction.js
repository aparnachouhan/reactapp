import { toast } from "react-toastify"
import { Login, LoginHandler } from "../services/Auth"
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./Constant"

export const LoginAction = (data, navigate) => async (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST
    })
    LoginHandler(data).then((res) => {
        if (res.status === 200) {
            toast.success(res.data.mag)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            navigate('/dashboard')
        }
    }).catch((err) => {
        console.log('Can not', err)
    })
}
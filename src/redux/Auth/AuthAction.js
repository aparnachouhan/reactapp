import { toast } from "react-toastify"
import { Login, LoginHandler } from "../services/Auth"
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./Constant"

export const LoginAction = (data, navigate) => async (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST
    })
    LoginHandler(data).then((res) => {
        if (res.status === 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            navigate('/clinic/dashboard')
        }
        console.log(res.status)
        if(!res.status){
            toast.error('Something went wrong')
        }
    }).catch((err) => {
        console.log('Can not', err)
    })
}
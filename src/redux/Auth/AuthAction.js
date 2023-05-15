import { Login, LoginHandler } from "../services/Auth"
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./Constant"

export const LoginAction = (data, navigate) => async (dispatch) => {

    dispatch({
        type: LOGIN_REQUEST
    })


    LoginHandler(data).then((res) => {

        console.log(res)
    }).catch((err) => {
        console.log('Can not', err)
    })







}
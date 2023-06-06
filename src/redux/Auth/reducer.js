import { toast } from "react-toastify";
import { AUTH_ERROR, AUTH_LOGOUT, LOGIN_REQUEST, LOGIN_SUCCESS } from "./Constant";

const initialState = {
    login: {
        type: 'clinic',
        accessToken: ''
    }
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true }
        case LOGIN_SUCCESS:
            console.log(action.payload)
            toast.success('Login Success')
            return { type: 'clinic', accessToken: action.payload.Token.access }
        case AUTH_ERROR:
            toast.error(action.payload.message)
            return state;

        case AUTH_LOGOUT:
            return { accessToken: null }
        default:
            return state
    }
}

export default Reducer;

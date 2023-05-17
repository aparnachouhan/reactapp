import { toast } from "react-toastify";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./Constant";

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
            toast.success("login Sucecss")
            return { type: 'clinic', accessToken: action.payload.Token.access }
        default:
            return state
    }
}

export default Reducer;

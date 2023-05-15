import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./Constant";

const initialState = {
    user: {}
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true }

        case LOGIN_SUCCESS:
            return { loading: false, user: action.payload }
        default:
            return state
    }
}

export default Reducer;

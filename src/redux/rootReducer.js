import { combineReducers } from 'redux';
import Reducer from './Auth/reducer';
// import AdminReducer from './admin/reducer';
const rootReducer = combineReducers({ Clinic: Reducer });

export default rootReducer;
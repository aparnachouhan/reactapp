import { combineReducers } from "redux";
import Reducer from "./Auth/reducer";
import ClinicReducer from "./Clinic/ClinicReducer";
// import AdminReducer from './admin/reducer';
const rootReducer = combineReducers({ login: Reducer, clinic: ClinicReducer });

export default rootReducer;

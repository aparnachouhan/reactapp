import { AddNewStaff, GetStaffList } from "../services/Clinic";
import {
  ADD_NEW_STAFF_REQUEST,
  ADD_NEW_STAFF_SUCCESS,
  CLINIC_SERVER_ERROR,
  GET_STAFF_LIST_REQUEST,
  GET_STAFF_LIST_SUCCESS
} from "./clinicConstant";

export const GetStaffListAction = (token, navigate) => dispatch => {
  dispatch({
    type: GET_STAFF_LIST_REQUEST,
    payload: []
  });

  GetStaffList(token).then(res => {
    console.log(res, "Data");
    if (res.status == 200) {
      dispatch({
        type: GET_STAFF_LIST_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: CLINIC_SERVER_ERROR,
        payload: res
      });
    }
  });
};

export const AddNewStaffAction = (data, token, navigate) => dispatch => {
  dispatch({
    type: ADD_NEW_STAFF_REQUEST,
    payload: []
  });

  AddNewStaff(data, token).then(res => {
    console.log(res, "Data");
    if (res.status == 200) {
      dispatch({
        type: ADD_NEW_STAFF_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: CLINIC_SERVER_ERROR,
        payload: res
      });
    }
  });
};

import { AddNewStaff, DeleteStaffService, GetStaffList, UpdateStaff, GetDoctorList } from "../services/Clinic";
import { DELETE_STAFF_REQUEST, DELETE_STAFF_SUCCESS, UPDATE_STAFF_REQUEST, UPDATE_STAFF_SUCCESS } from "./clinicConstant";
import {
  ADD_NEW_STAFF_REQUEST,
  ADD_NEW_STAFF_SUCCESS,
  CLINIC_SERVER_ERROR,
  GET_STAFF_LIST_REQUEST,
  GET_STAFF_LIST_SUCCESS,
  GET_DOCTOR_LIST_REQUEST,
  GET_DOCTOR_LIST_SUCCESS
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


export const UpdateStaffAction = (data, token, navigate) => dispatch => {
  dispatch({
    type: UPDATE_STAFF_REQUEST,
    payload: []
  });

  UpdateStaff(data, token).then(res => {
    console.log(res, "Data");
    if (res.status == 200) {
      dispatch({
        type: UPDATE_STAFF_REQUEST,
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


export const DeleteStaff = (data, token , navigate) => async(dispatch) => {
  dispatch({
    type: DELETE_STAFF_REQUEST,
  })

  await DeleteStaffService(data.id, token).then(res => {
    if (res.status == 204) {
      dispatch({
        type: DELETE_STAFF_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: CLINIC_SERVER_ERROR,
        payload: res
      });
    }
  })
}


export const GetDoctorListAction = (token, navigate) => dispatch => {
  
  dispatch({
    type: GET_DOCTOR_LIST_REQUEST,
    payload: []
  });

  GetDoctorList(token).then(res => {
    console.log(res, "Data");
    if (res.status == 200) {
      dispatch({
        type: GET_DOCTOR_LIST_SUCCESS,
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
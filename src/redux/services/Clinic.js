import API from "../../config/API";
import DataService from "../../config/Dataservice";
import { handleError, setHeadersWithAccessToken } from "./Comman";

export const GetStaffList = async (token) => {
  setHeadersWithAccessToken(token);
  return await DataService.get(API.Clinic.Staff.GetAllStaffList)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      return handleError(err);
    });
};

export const AddNewStaff = async (data, token) => {
  setHeadersWithAccessToken(token);
  return DataService.post(API.Clinic.Staff.AddStaff, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return handleError(err);
    });
};


export const AddNewDoctor = async (data, token) => {
  setHeadersWithAccessToken(token);
  return DataService.post(API.Clinic.Doctor.AddDoctor, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return handleError(err);
    });
};

export const UpdateStaff = async(data,token) =>{
  // setHeadersWithAccessToken(token);
  return DataService.put(API.Clinic.Staff.UpdateStaff, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return handleError(err);
    });
}


export const UpdateDoctor = async(data,token) =>{
  // setHeadersWithAccessToken(token);
  return DataService.put(API.Clinic.Doctor.UpdateDoctor, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return handleError(err);
    });
}

export const DeleteStaffService = async (data, token) => {
  setHeadersWithAccessToken(token);
  return DataService.delete(`${API.Clinic.Staff.DeleteStaff}/${data.id}`).then(res => {
    return res.data;
  })
    .catch(err => {
      return handleError(err);
    });;
};


export const GetDoctorList = async (token) => {
  setHeadersWithAccessToken(token);
  return await DataService.get(API.Clinic.Doctor.ViewAllDoctors)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      return handleError(err);
    });
};
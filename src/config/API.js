const API = {
  Auth: {
    Login: "/account/login",
    Register: "/api/register"
  },
  Doctors: {},

  Clinic: {
    Staff: {
      GetAllStaffList: "/account/view-all/staff",
      AddStaff: "/account/staff/registration",
      DeleteStaff:'/account/staff-delete',
      UpdateStaff:'/account/staff-update/information',
    },
    Doctor: {
      ViewAllDoctors:'/account/view-all/doctor',
      AddDoctor: "/account/doctor/registration",
      UpdateDoctor:"/account/doctor-update/information",
    }
  }
};


export default API;

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
      ViewAllDoctors:'/account/view-all/doctor'
    }
  }
};


export default API;

import { toast } from "react-toastify";
import {
  GET_DASHBOARD_DATA_REQUEST,
  GET_DASHBOARD_DATA_SUCCESS
} from "./clinicConstant";

let allStaff = [{}];

let DashBoardsData = [
  {
    title: "Total Fixed Appointments",
    value: 100
  },
  {
    title: "Total Pending Appointments",
    value: 100
  },
  {
    title: "Total Cancelled Appointments",
    value: 100
  },
  {
    title: "Total Fixed Appointments",
    value: 100
  },
  {
    title: "Total Pending Appointments",
    value: 100
  },
  {
    title: "Total Cancelled Appointments",
    value: 100
  }
];

const initialState = {
  allStaff: [],
  DashboardState: DashBoardsData
};

const ClinicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_DATA_REQUEST:
      return { loading: true };

    case GET_DASHBOARD_DATA_SUCCESS:
      toast.success("login Sucecss");
      return { type: "clinic", accessToken: action.payload.Token.access };
    default:
      return state;
  }
};

export default ClinicReducer;

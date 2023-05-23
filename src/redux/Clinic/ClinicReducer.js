import { toast } from "react-toastify";
import {
  ADD_NEW_STAFF_REQUEST,
  DELETE_STAFF_SUCCESS,
  GET_DASHBOARD_DATA_REQUEST,
  GET_DASHBOARD_DATA_SUCCESS,
  GET_STAFF_LIST_REQUEST,
  GET_STAFF_LIST_SUCCESS,
  UPDATE_STAFF_SUCCESS
} from "./clinicConstant";
import { Dashboard } from "@mui/icons-material";

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
      return { DashBoardsData: DashBoardsData };
    case GET_STAFF_LIST_REQUEST:
      return { loading: true };
    case GET_STAFF_LIST_SUCCESS:
      return { staffList: action.payload };
    case ADD_NEW_STAFF_REQUEST:
      return { loading: true };
    case ADD_NEW_STAFF_REQUEST:
      toast.success("Staff Added");
      return { loading: false };
    case DELETE_STAFF_SUCCESS:
      toast.success("Staff Deleted")
      return { loading: false }
    case UPDATE_STAFF_SUCCESS:
      toast.success("Staff Updated")
      return { loading: false}

    default:
      return state;
  }
};

export default ClinicReducer;

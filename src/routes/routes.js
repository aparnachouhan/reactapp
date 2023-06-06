import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate
} from "react-router-dom";
import Home from "../container/Home";
import Login from "../container/auth/Login";
import About from "../container/About";
import Header from "../components/Header";
import Products from "../container/Products";
import { useSelector } from "react-redux";
import Dashboard from "../container/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import StaffList from "../container/clinic/Staff/Stafflist";
import ClinicLayout from "../components/Layout/Clinic/ClinicLayout";
import DoctorList from "../container/clinic/Doctors/Doctorlist";

const AppRouter = (props) => {
  const data = useSelector((state) => state.login.type);

  console.log(data, "type");

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Clinic Private Routes */}
        {data == "clinic" && <>     <Route path="/clinic/dashboard" element={<Dashboard />} />
          <Route path="/clinic/staff/list" element={<StaffList />} />
          <Route path="/clinic/doctor/list" element={<DoctorList />} /></>}


        {/* End of Clinic Private Routes */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default AppRouter;

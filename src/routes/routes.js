import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../container/Home";
import Login from "../container/auth/Login";
import About from "../container/About";
import Header from "../components/Header";
import Products from "../container/Products";
import { useSelector } from "react-redux";



const AppRouter = (props) => {


    return (
        <>


            <Routes>

                    <Route path="/" element={<Login />} />
            </Routes>

        </>
    )
}


export default AppRouter;

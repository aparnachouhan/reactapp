import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../container/Home";
import Contact from "../container/Contact";
import About from "../container/About";
import Header from "../components/Header";
import Products from "../container/Products";



const AppRouter = (props) => {

    console.log(props)

    return (
        <>

            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact"  element={<Contact name={props}/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />

                </Routes>

            </BrowserRouter>
        </>
    )
}


export default AppRouter;

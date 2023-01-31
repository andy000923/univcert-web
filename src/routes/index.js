import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Info1 from "../pages/information/Info1.jsx";
import Info2 from "../pages/information/Info2.jsx";
import Info3 from "../pages/information/Info3.jsx";
import Info4 from "../pages/information/Info4.jsx";
import Info5 from "../pages/information/Info5.jsx";
const RootRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/1' element={<Info1/>} />
                <Route path='/2' element={<Info2/>} />
                <Route path='/3' element={<Info3/>} />
                <Route path='/4' element={<Info4/>} />
                <Route path='/5' element={<Info5/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Info1 from "../pages/information/Info1.jsx";
const RootRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/1' element={<Login/>} />
                <Route path='/2' element={<Info1/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;
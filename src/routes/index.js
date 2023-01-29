import { BrowserRouter, Route, Routes } from "react-router-dom"
import Slide1 from "../pages/Slide1";
import Slide2 from "../pages/Slide2";
import Slide3 from "../pages/Slide3";
const RootRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Slide1/>} />
                <Route path='/2' element={<Slide2/>} />
                <Route path='/3' element={<Slide3/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute;
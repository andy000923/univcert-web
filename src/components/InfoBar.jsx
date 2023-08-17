import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Fmain from "../assets/main.svg";
import Fexport from "../assets/export.svg";
import Frame1off from "../assets/Frame1off.svg";
import Frame2 from "../assets/Frame2.svg";
import Frame3 from "../assets/Frame3.svg";
import Frame4 from "../assets/Frame4.svg";
import Frame5 from "../assets/Frame5.svg";
import Frame6 from "../assets/Frame6.svg";
import Frame7 from "../assets/Frame7.svg";
import Frame8 from "../assets/Frame8.svg";
import Frame1 from "../assets/Frame1.svg";
import Frame2on from "../assets/Frame2on.svg";
import Frame3on from "../assets/Frame3on.svg";
import Frame4on from "../assets/Frame4on.svg";
import Frame5on from "../assets/Frame5on.svg";
import Frame7on from "../assets/Frame7on.svg";
import Frame8on from "../assets/Frame8on.svg";

const InfoBar = () => {
    const location = useLocation()
    const [activeItem, setActiveItem] = useState(null);
    useEffect(() => {
        const pathToIndexMap = {
            "/instruction": 1,
            "/instruction1": 2,
            "/instruction2": 3,
            "/instruction3": 4,
            "/instruction4": 5,
            "/instruction5": 7,
            "/instruction6": 8,
        };

        const activeIndex = pathToIndexMap[location.pathname];
        setActiveItem(activeIndex);
    }, [location.pathname]);
    const isActive = (index) => {
        return activeItem === index ? "clicked" : "";
    };

    return (
        <div className="frame-container">
            <Link to="/instruction" style={{ textDecoration: "none", color: "black" }}>
                <img alt="" className={`Frame ${isActive(1)}`} src={activeItem === 1 ? Frame1 : Frame1off} />
            </Link>
            <img alt="" className="Fmain" src={Fmain} />
            <Link to="/instruction1" style={{ textDecoration: "none", color: "black" }}>
                <img alt="" className={`Frame ${isActive(2)}`} src={activeItem === 2 ? Frame2on : Frame2} />
            </Link>
            <Link to="/instruction2" style={{ textDecoration: "none", color: "black" }}>
                <img alt="" className={`Frame ${isActive(3)}`} src={activeItem === 3 ? Frame3on : Frame3} />
            </Link>
            <img alt="" className="Fexport" src={Fexport} />
            <Link to="/instruction3" style={{ textDecoration: "none", color: "black" }}>
                <img alt="" className={`Frame ${isActive(4)}`} src={activeItem === 4 ? Frame4on : Frame4} />
            </Link>
            <Link to="/instruction4" style={{ textDecoration: "none", color: "black" }}>
                <img alt="" className={`Frame ${isActive(5)}`} src={activeItem === 5 ? Frame5on : Frame5} />
            </Link>
            <Link to="/instruction5" style={{ textDecoration: "none", color: "black" }}>
                <img alt="" className={`Frame ${isActive(7)}`} src={activeItem === 7 ? Frame7on : Frame7} />
            </Link>
            <Link to="/instruction6" style={{ textDecoration: "none", color: "black" }}>
                <img alt="" className={`Frame ${isActive(8)}`} src={activeItem === 8 ? Frame8on : Frame8} />
            </Link>
            <a href="https://incredible-raincoat-c52.notion.site/cdb55dd7ea5b475eaaf94ce76fa9eba4">
                <img alt="" className={`Frame ${isActive(6)}`} src={Frame6} />
            </a>
        </div>
    );
};

export default InfoBar;

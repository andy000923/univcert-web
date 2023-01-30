import * as React from "react";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import Header from "../components/Header";
const QuickStart = () => {
    return (
            <div>
                <Header/>
                <div className="BodyMain">

                    <div className="BodyImages">
            
                        <img className="image2" src={image2} alt=""/>
                        <img className="image3" src={image3} alt=""/>
                    
                    </div>
                </div>
            </div>
    );
};
export default QuickStart;
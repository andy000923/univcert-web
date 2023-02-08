import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import loginlogo from "../assets/loginlogo.png"
import univcertlogo from "../assets/UNIVCERT.png"
import ContactUsButton from "../components/ContactUsButton"
import axios from "axios";
import "./Mypage.css"

const Mypage = ({setemail}) => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    };
    const baseUrl = 'https://univcert.com/api';
    const [team_name, setteam_name] = useState();
    const [emailmax, setemailmax] = useState();
    const [apikey, setapikey] = useState();
        
    
  return (
    <div className="home-main">              
        <div className="signup-main">
        <img className="univcertlogo" src={univcertlogo} onClick={goToHome}/>
            <div className="body-outer" >                        
                <div id="MODAL_BODY" class="ModalBody Body_body__KI0OY SignUpOrLogin_modal__VDGVH">
                    <div class="TextPanel_className__J3J2W">
                        <h1>API 키 확인을 위한 마이페이지</h1>
                    </div>
                    <div class="InputPanel_wrapper__RXp1k">
                        <input class="InputPanel_password__my_BO" type="password" autocomplete="password"></input>
                        <div class="style_wrapper__6RiUK InputPanel_email__aEAmZ">
                            <label for="email" class="style_label__BKYHB">도메인 명 (소속명) </label>
                            <div class="style_body__A6XnO">
                                <input type="text" id="email" value={team_name}></input>
                            </div>
                        </div>
                        <div class="style_wrapper__6RiUK InputPanel_email__aEAmZ">
                            <label for="email" class="style_label__BKYHB">개발자 이메일 </label>
                            <div class="style_body__A6XnO">
                                <input type="email"  id="email" value={setemail}></input>
                            </div>
                        </div>
                        <div class="style_wrapper__6RiUK InputPanel_email__aEAmZ">
                            <label for="email" class="style_label__BKYHB">API KEY</label>
                            <div class="style_body__A6XnO">
                                <input type="text"  id="email" value={apikey}></input>
                            </div>
                        </div>
                        <div class="style_wrapper__6RiUK InputPanel_email__aEAmZ">
                            <label for="email" class="style_label__BKYHB">오늘 메일 발송 횟수 (최대 200)</label>
                            <div class="style_body__A6XnO">
                                <input type="email" id="email" value={emailmax}></input>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
        <div className="advertisement-main">
            <img className="loginlogo" src={loginlogo}/>
            <div className="button-container">
                <ContactUsButton/>
            </div>
        </div>
    </div>
  );
}

export default Mypage;

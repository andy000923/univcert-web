import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import loginlogo from "../assets/loginlogo.png"
import univcertlogo from "../assets/UNIVCERT.png"
import ContactUsButton from "../components/ContactUsButton"
import createaccountbutton from "../assets/CreateAccountButton.png"
import axios from "axios";
import "./Mypage.css"

const Mypage = (props) => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    };
    const baseUrl = 'https://univcert.com/api';

    const [email, setemail] = useState();
    const [team_name, setteam_name] = useState();

    const handleChange_email = (e)=>{
        e.preventDefault();
        setemail(e.target.value);
    }

    const handleChange_team_name = (e)=>{
        e.preventDefault();
        setteam_name(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        await axios
            .post(baseUrl + "/login", {
                email:email,
                team_name:team_name,
            },
            {
                withCredentials: true // 쿠키 cors 통신 설정
              })
            .then(response=>{
                console.log(response);
                console.log(email, team_name);
                if (response.status === 200) {
                    alert("Success");
                } else if (response.status === 400) {
                    alert("Bad Request");
                } else if (response.status === 500) {
                    alert("Server error");
                }
            },
            (error)=>{
                console.log(error); 
                if (error.response.status === 200) {
                    alert("Success");
                } else if (error.response.status === 400) {
                    alert("Bad Request");
                } else if (error.response.status === 500) {
                    alert("Server error");
                }  
            });
    }
        
    
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
                                <input type="email"  id="email" value={email}></input>
                            </div>
                        </div>
                        <div class="style_wrapper__6RiUK InputPanel_email__aEAmZ">
                            <label for="email" class="style_label__BKYHB">API KEY</label>
                            <div class="style_body__A6XnO">
                                <input type="text"  id="email" value={team_name}></input>
                            </div>
                        </div>
                        <div class="style_wrapper__6RiUK InputPanel_email__aEAmZ">
                            <label for="email" class="style_label__BKYHB">오늘 메일 발송 횟수 (최대 200)</label>
                            <div class="style_body__A6XnO">
                                <input type="email" id="email" value={email}></input>
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

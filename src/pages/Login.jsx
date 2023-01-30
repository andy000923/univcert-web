import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import loginlogo from "../assets/loginlogo.png"
import univcertlogo from "../assets/UNIVCERT.png"
import ContactUsButton from "../components/ContactUsButton"
import createaccountbutton from "../assets/CreateAccountButton.png"
import axios from "axios";
import "./Login.css"

const Login = (props) => {
  
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
        <img className="univcertlogo" src={univcertlogo}/>
            <div>                        
                <div id="MODAL_BODY" class="ModalBody Body_body__KI0OY SignUpOrLogin_modal__VDGVH">
                    <div class="TextPanel_className__J3J2W">
                        <h1>API 키 확인을 위한 로그인</h1>
                    </div>
                    <div class="InputPanel_wrapper__RXp1k">
                        <input class="InputPanel_password__my_BO" type="password" autocomplete="password"></input>
                        <div class="style_wrapper__6RiUK InputPanel_email__aEAmZ">
                            <label for="email" class="style_label__BKYHB">도메인 명 (소속명) </label>
                            <div class="style_body__A6XnO">
                                <input type="text" onChange={handleChange_team_name} placeholder="예) univcert.com &nbsp; or &nbsp; 우아한형제들" id="email" value={team_name}></input>
                            </div>
                        </div>
                        <div class="style_wrapper__6RiUK InputPanel_email__aEAmZ">
                            <label for="email" class="style_label__BKYHB">개발자 이메일 </label>
                            <div class="style_body__A6XnO">
                                <input type="email" onChange={handleChange_email} placeholder="예) abc@gmail.com" id="email" value={email}></input>
                            </div>
                        </div>
                        <div class="InputPanel_buttons__w391m">
                            <button type="button" class="style_wrapper__IgK7U email-login-button"
                            onClick={handleSubmit}>
                                로그인
                            </button>
                            
                            <div class="InputPanel_socialLogins__j0wq7">도메인 명을 잊어버리셨나요?</div>
                            <div class="InputPanel_divider__WEgZ3"></div>
                            <div class="InputPanel_socialWrapper__Dhaxo isKR">
                            <img className="loginlogo" src={createaccountbutton}/>
                            </div>
                        </div>
                        <p class="style_wrapper__MbwMv">회원가입 시 <a class="loginModalAnchor" href="https://help.wanted.co.kr/hc/ko/articles/360035484292" target="_blank">개인정보 처리방침</a>과 <a class="loginModalAnchor" href="https://help.wanted.co.kr/hc/ko/articles/360035844551" target="_blank">이용약관</a>을 확인하였으며, 동의합니다.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="advertisement-main">
            <img className="loginlogo" src={loginlogo}/>
            <ContactUsButton/>
        </div>
    </div>
  );
}

export default Login;

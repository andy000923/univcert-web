import React, {useState} from 'react';
import {useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Home.css";
import checkbox from "../assets/checkbox.svg";
import Header from "../components/Header";
import ContactUsButton from '../components/ContactUsButton';
import checkimg from "../assets/univcheck.svg";
import icon1 from "../assets/FooterIcon1.png"
import icon2 from "../assets/FooterIcon2.png"
import icon3 from "../assets/FooterIcon3.png"
import icon4 from "../assets/FooterIcon4.png"
import icon5 from "../assets/FooterIcon5.png"
import icon6 from "../assets/FooterIcon6.png"
import icon7 from "../assets/FooterIcon7.png"
import icon8 from "../assets/FooterIcon8.png"
import slideicon from "../assets/logoimg.svg"
import baro from "../assets/baro.png"
import footertext from "../assets/FooterText.png"
const Home = () => {
  const baseUrl = 'https://univcert.com/api';
    const [color, setcolor] = useState(false);
    const [univcheck, setunivcheck] = useState(false);
    const [email, setemail] = useState();
    const [email1, setemail1] = useState();
    const [domain, setdomain] = useState();
    const [univName, setunivName] = useState();
    const [univName1, setunivName1] = useState();
    const [status, setstatus] = useState([]);
    const [success, setsuccess] = useState([]);
    const [animationActive, setAnimationActive] = useState(false);

    useEffect(() => {
      setstatus("200"); 
      setsuccess("true"); 
      setdomain("mail.hongik.ac.kr");
      setemail1("abc123@mail.hongik.ac.kr");
      setunivName1("홍익대학교");
    }, []);
    const handleChange_email = (e)=>{
      e.preventDefault();
      setemail(e.target.value);
    }
    const handleTest = (e)=>{
      alert("대학명 체크를 먼저 진행해 주세요.");
    }
    const handleChange_univName = (e)=>{
      e.preventDefault();
      setunivName(e.target.value);
      setunivcheck(false);
    }
    const handleCheckUniv = async (e) => {
      e.preventDefault();
      axios.defaults.withCredentials = true;
      await axios
        .post(baseUrl + "/checkuniv", {
          univName:univName,
        },
        {
          withCredentials: true // 쿠키 cors 통신 설정
        })
        .then(response=>{
          //console.log(response);
          if (response.data.code == null) {          
            alert("테스트가 가능한 학교명입니다!"); 
            setunivcheck(true);   
          }
          else if (response.data.code != null) {
            alert((response.data.message));
          }
        },
        (error)=>{
            console.log(error); 
          if (error.code != null) {
                alert(error.message);
            }  
        }
      );
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      axios.defaults.withCredentials = true;
      await axios
        .post(baseUrl + "/try", 
          {
            email:email,
            univName:univName,
          },
          {
            withCredentials: true // 쿠키 cors 통신 설정
          }
        )
        .then(response=>{
          console.log(response);   
          setstatus(response.data.status); 
          setdomain(response.data.domain);
          setemail1(email);
          setunivName1(univName);
          var message = response.data.message;
          if (response.data.status === 200) {              
            setsuccess("true");
            setcolor(false);
            message = "success";
          }
          else if (response.data.status === 400) {
            setsuccess("false");
            setcolor(true);
            message = "잘못된 요청입니다, 예상 대학 도메인 : "+ response.data.expected;
          }
          else if (response.data.code != null) {
            setsuccess("false");
            setcolor(true);
          }
          setTimeout(function(){
              alert(message);
          }, 200);
        },
        (error)=>{
            console.log(error); 
          if (error.code != null) {
            alert("잘못된 메일 형식입니다. 예시 : abc123@snu.ac.kr");
            setcolor(true);
          }  
        }
      );
      setAnimationActive(!animationActive);
    }
  return (
    <div className="slide-169-1">
      <div className="width-holder1">
        <Header/>
      </div>
      <div className="rectangle-1">
        <div className="width-holder2">
          <div className="flex-container">
            <span className="email-validation-and">
            <h1 className='titletext'>메일<small className='plustext'></small> (<small className='plustext'>+</small>대학<small className='plustext'></small>) 인증 API</h1>
            </span>
            <span className="improve-your-deliver">
            <h1 className='oneline'> 단 <span className="status-box-pink">한 줄</span>의 코드로 .</h1>
            <h2 className='secondline'>사용자의 메일과 대학 재학 여부까지 인증해 보세요.</h2>
            </span>

            {univcheck? 
            <div className="univName-container">
              <input type="text" className="univName-input" required={true} value={univName} onChange={handleChange_univName} placeholder=" ex) 홍익대학교"/>
              <button type="submit" className="test-button" onClick={handleCheckUniv}><img className='check' alt='check' src={checkimg}/></button>
            </div> 
            :
            <div className="univName-container">
              <input type="text" className="univName-input" required={true} value={univName} onChange={handleChange_univName} placeholder=" ex) 홍익대학교"/>
              <button type="submit" className="test-button" onClick={handleCheckUniv}><span className="status-box-white">대학명체크</span></button>
            </div> 
            }

            {univcheck? 
            <div className="email-container">
              <input type="email" className="email-input" required={true} value={email} onChange={handleChange_email} placeholder=" ex) abc123@mail.hongik.ac.kr"/>
              <button type="submit" className="test-button" onClick={handleSubmit}><span className="status-box-white">테스트</span></button>
            </div> 
            :
            <div className="email-container">
              <input type="email" className="email-input" required={true} value={email} onChange={handleChange_email} placeholder=" ex) abc123@mail.hongik.ac.kr"/>
              <button type="submit" className="test-button" onClick={handleTest}><span className="status-box-white">테스트</span></button>
            </div> 
            }
            
            <div className="checkbox-container">
              <img src={checkbox} alt='checkimg' className="checkbox"/>
              <ul class="checkbox-content">
                <p className='check-text'>대학 인증이 불필요하신 분은<br/>APIs 페이지를 참고해주세요.</p>
              </ul>
            </div>
          </div>
          <div className="flex-container-div"></div>
          <div className="flex-container-1">
            <div className="w-full lg:w-1/3">
              <div className={`info-container ${animationActive ? 'animate' : ''}`}>
                &nbsp;UnivCert.certify("private Key", {email1}, {univName1}, true);
              </div>
              <div className={`code-container ${animationActive ? 'animate' : ''}`}>
                <pre className="flex items-center h-64 rounded shadow-xl ">                        
                  {color?
                    <code className="status-box">
                      <span className="status-box-punctuation">&#123; </span><br/>
                          <span className="status-box-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status"</span> <span className="status-box-punctuation">:</span> <span className="status-box-number">{status}</span><span className="status-box-punctuation">,</span><br/>
                          <span className="status-box-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain"</span> <span className="status-box-punctuation">:</span> <span className="status-box-string">{domain}</span><span className="status-box-punctuation">,</span> <br/>
                          <span className="status-box-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"univ_email"</span> <span className="status-box-punctuation">:</span> <span className="status-box-keyword">{email1}</span><span className="status-box-punctuation">,</span><br/>
                          <span className="status-box-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"univ_name"</span> <span className="status-box-punctuation">:</span> <span className="status-box-keyword">{univName1}</span><span className="status-box-punctuation">,</span><br/>
                          <span className="status-box-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"success"</span> <span className="status-box-punctuation">:</span> <span className="status-box-purple">{success}</span><br/>
                      <span className="status-box-punctuation">&#125; </span>
                    </code>
                    :
                    <code className="status-box">
                      <span className="status-box-punctuation">&#123; </span><br/>
                          <span className="status-box-green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status"</span> <span className="status-box-punctuation">:</span> <span className="status-box-number">{status}</span><span className="status-box-punctuation">,</span><br/>
                          <span className="status-box-green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain"</span> <span className="status-box-punctuation">:</span> <span className="status-box-string">{domain}</span><span className="status-box-punctuation">,</span> <br/>
                          <span className="status-box-green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"univ_email"</span> <span className="status-box-punctuation">:</span> <span className="status-box-keyword">{email1}</span><span className="status-box-punctuation">,</span><br/>
                          <span className="status-box-green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"univ_name"</span> <span className="status-box-punctuation">:</span> <span className="status-box-keyword">{univName1}</span><span className="status-box-punctuation">,</span><br/>
                          <span className="status-box-green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"success"</span> <span className="status-box-punctuation">:</span> <span className="status-box-purple">{success}</span><br/>
                      <span className="status-box-punctuation">&#125; </span>
                    </code>
                  }
                </pre>
              </div>
              <div className="info-example">
                <span className="status-box-info">* 상단의 요청 및 응답은 예시입니다. 실제 API 사용은 APIs 페이지를 참고해주세요</span>
              </div>
            </div>        
          </div>
        </div>
      </div>
      <Link to='/instruction8'>
      <div class="slide-banner">
        <div class="slide-content1">
          <img className="slideicon" alt="icon" src={slideicon}/>
          <div className="slide-phrase">
            <p>24.02 전국 400개 대학교 업데이트 완료 !</p>
            <img className="baro" alt="icon" src={baro}/>
          </div>
          <img className="slideicon" alt="icon" src={slideicon}/>
          <div className="slide-phrase">
            <p>24.02 전국 400개 대학교 업데이트 완료 !</p>
            <img className="baro" alt="icon" src={baro}/>
          </div>
        </div>
        <div class="slide-content2">
          <div className="slide-phrase">
          <img className="slideicon" alt="icon" src={slideicon}/>
            <p>24.02 전국 400개 대학교 업데이트 완료 !</p>
            <img className="baro" alt="icon" src={baro}/>
          </div>    
          <img className="slideicon" alt="icon" src={slideicon}/>
          <div className="slide-phrase">
            <p>24.02 전국 400개 대학교 업데이트 완료 !</p>
            <img className="baro" alt="icon" src={baro}/>
          </div> 
        </div>
      </div>
      </Link>
      <div className="width-holder1">
        <div className="flex-container-2">
          <div className='flex-container-3'>
            <div className='icontext'><img className='info-icon' alt="" src={icon1}/><p className="p-text">대학 도메인 기반<br/>확실한 인증 로직</p></div>
            <div className='icontext'><img className='info-icon' alt="" src={icon2}/><p className="p-text">보안에<br/>최적화 된 API</p></div>
            <div className='icontext'><img className='info-icon' alt="" src={icon3}/><p className="p-text">소속명에 따라<br/>메일 내용 변형</p></div>
            <div className='icontext'><img className='info-icon' alt="" src={icon4}/><p className="p-text">인증에 필요한<br/>로직 불필요</p></div>
            <div className='icontext'><img className='info-icon' alt="" src={icon5}/><p className="p-text">초보자도<br/>사용할 수 있는 API</p></div>
          </div>
          <div className='flex-container-3'>
            <div className='icontext2'>
              <img className='info-icon2' alt="" src={icon6}/>
              <div>
                <h3>시간과 자원 낭비를 줄입니다.</h3>
                <p className="p-text">메일 전송에 필요한 로직과 인증코드를 기록하기</p>
                <p className="p-text">위한 테이블, 학생증 인증에 필요한 이미지 저장 등</p>
                <p className="p-text">일회성 기능에 많은 자원을 낭비하고 있습니다.</p>
                <h4>불필요한 구현을 위임하고 개발 시간을 단축하세요.</h4>
              </div>
            </div>
            <div className='icontext2'>
              <img className='info-icon3' alt="" src={icon7}/>
              <div>
                <h3>준비되어있는 자바 라이브러리</h3>
                <p className="p-text">인증을 위해 불가피한 Rest API 통신 과정을 </p>
                <p className="p-text">개발경험이 없어도 쉽게 쓸 수 있도록 만들어 놓았습니다.</p>
                <p className="p-text">자바를 사용하는 플랫폼이라면 해당 라이브러리로 </p>
                <h4>모든 과정을 최대 두 줄로 끝내보세요.</h4>
              </div>
            </div>
            <div className='icontext2'>
              <img className='info-icon4' alt="" src={icon8}/>
              <div>
                <h3>대학재학 여부는 불필요하다면?</h3>
                <p className="p-text">메일인증 로직 구현에 신경 쓰고 싶지 않은 분이시라면.</p>
                <p className="p-text">univ_check 컬럼을 false로 요청시 메일 소유 여부만</p>
                <p className="p-text">체크 할 수 있습니다.</p>
                <h4>상황에 맞게 효율적으로 사용해 보세요.</h4>
              </div>
            </div> 
          </div>
          <img className='footer-icon' alt="" src={footertext}/>
        </div>
      </div>
      <ContactUsButton/>
    </div>
  );
};
export default Home;

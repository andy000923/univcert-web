import React, {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import "./Home.css";
import group170 from "../assets/Group170.svg";
import checkbox from "../assets/checkbox.svg";
import Header from "../components/Header";
import ContactUsButton from '../components/ContactUsButton';
import checkimg from "../assets/univcheck.svg";
const Home = () => {
  const baseUrl = 'https://univcert.com:8080/api';
    const [color, setcolor] = useState(false);
    const [univcheck, setunivcheck] = useState(false);
    const [email, setemail] = useState();
    const [email1, setemail1] = useState();
    const [domain, setdomain] = useState();
    const [univName, setunivName] = useState();
    const [univName1, setunivName1] = useState();
    const [status, setstatus] = useState([]);
    const [success, setsuccess] = useState([]);
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
            console.log(response);
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
          });
        }

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        await axios
            .post(baseUrl + "/try", {
                email:email,
                univName:univName,
            },
            {
                withCredentials: true // 쿠키 cors 통신 설정
              })
            .then(response=>{
                console.log(response);   
                setstatus(response.data.status); 
                setdomain(response.data.domain);
                setemail1(email);
                setunivName1(univName);
                if (response.data.status === 200) {          
                  alert("Success");  
                  setsuccess("true");
                  setcolor(false);
                }
                else if (response.data.status === 400) {
                  alert("잘못된 요청입니다, 예상 대학 도메인 : "+(response.data.expected));
                  setsuccess("false");
                  setcolor(true);
                }
                else if (response.data.code != null) {
                  alert((response.data.message));
                  setsuccess("false");
                  setcolor(true);
                }
            },
            (error)=>{
                console.log(error); 
              if (error.code != null) {
                    alert("잘못된 메일 형식입니다. 예시 : abc123@snu.ac.kr");
                    setcolor(true);
                }  
            });
    }
  
  return (
    <div className="slide-169-1">
      <Header/>
      <div className="rectangle-1">
        
          <div className="flex-container">
            <span className="email-validation-and">
            <h1 className='titletext'>메일<small className='plustext'> </small>(<small className='plustext'> + </small>대학<small className='plustext'> </small>) 인증 API</h1>
            </span>
            <span className="improve-your-deliver">
            <br/> <h1 className='oneline'> 단 <span className="hljs-pink">한 줄</span>의 코드로 .<br/> 사용자의 메일과 대학 재학 여부까지 인증해 보세요. </h1>
            </span>

            {univcheck? 
            <div className="univName-container">
              <input type="text" className="univName-input" required={true} value={univName} onChange={handleChange_univName} placeholder=" ex) 홍익대학교"/>
              <button type="submit" className="test-button" onClick={handleCheckUniv}><img className='checkimg' alt="checkimg" src={checkimg}/></button>
            </div> 
            :
            <div className="univName-container">
              <input type="text" className="univName-input" required={true} value={univName} onChange={handleChange_univName} placeholder=" ex) 홍익대학교"/>
              <button type="submit" className="test-button" onClick={handleCheckUniv}><span className="hljs-white">대학명 체크</span></button>
            </div> 
            }

            {univcheck? 
            <div className="email-container">
              <input type="email" className="email-input" required={true} value={email} onChange={handleChange_email} placeholder=" ex) abc123@mail.hongik.ac.kr"/>
              <button type="submit" className="test-button" onClick={handleSubmit}><span className="hljs-white">테스트</span></button>
            </div> 
            :
            <div className="email-container">
              <input type="email" className="email-input" required={true} value={email} onChange={handleChange_email} placeholder=" ex) abc123@mail.hongik.ac.kr"/>
              <button type="submit" className="test-button" onClick={handleTest}><span className="hljs-white">테스트</span></button>
            </div> 
            }
            
            <div className="checkbox-container">
              <img src={checkbox} alt="checkbox" className="checkbox"/>
              <ul className="checkbox-content">
                <p className='check-text'>대학인증이 불필요하신 분은<br/>APIs 페이지를 참고해주세요.</p>
              </ul>
            </div>
          </div>
          <div className="flex-container-div"></div>
          <div className="flex-container-1">
            <div className="w-full lg:w-1/3">
              <div className="info-container">
                &nbsp;&nbsp;UnivCert.certify("private Key", {email1}, {univName1}, true);
              </div>
              <div className="code-container">
                <pre className="flex items-center h-64 rounded shadow-xl ">                        
                  {color?
                    <code className="language-json hljs">
                      <span className="hljs-punctuation">&#123; </span><br/>
                          <span className="hljs-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status"</span> <span className="hljs-punctuation">:</span> <span className="hljs-number">{status}</span><span className="hljs-punctuation">,</span><br/>
                          <span className="hljs-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain"</span> <span className="hljs-punctuation">:</span> <span className="hljs-string">{domain}</span><span className="hljs-punctuation">,</span> <br/>
                          <span className="hljs-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"univ_email"</span> <span className="hljs-punctuation">:</span> <span className="hljs-keyword">{email1}</span><span className="hljs-punctuation">,</span><br/>
                          <span className="hljs-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"univ_name"</span> <span className="hljs-punctuation">:</span> <span className="hljs-keyword">{univName1}</span><span className="hljs-punctuation">,</span><br/>
                          <span className="hljs-red">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"success"</span> <span className="hljs-punctuation">:</span> <span className="hljs-purple">{success}</span><br/>
                      <span className="hljs-punctuation">&#125; </span>
                    </code>
                    :
                    <code className="language-json hljs">
                      <span className="hljs-punctuation">&#123; </span><br/>
                          <span className="hljs-green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"status"</span> <span className="hljs-punctuation">:</span> <span className="hljs-number">{status}</span><span className="hljs-punctuation">,</span><br/>
                          <span className="hljs-green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain"</span> <span className="hljs-punctuation">:</span> <span className="hljs-string">{domain}</span><span className="hljs-punctuation">,</span> <br/>
                          <span className="hljs-green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"univ_email"</span> <span className="hljs-punctuation">:</span> <span className="hljs-keyword">{email1}</span><span className="hljs-punctuation">,</span><br/>
                          <span className="hljs-green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"univ_name"</span> <span className="hljs-punctuation">:</span> <span className="hljs-keyword">{univName1}</span><span className="hljs-punctuation">,</span><br/>
                          <span className="hljs-green">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"success"</span> <span className="hljs-punctuation">:</span> <span className="hljs-purple">{success}</span><br/>
                      <span className="hljs-punctuation">&#125; </span>
                    </code>
                  }
                  
                </pre>
              </div>
            </div>        
          </div>
        
      </div>
      <div className='footer-container'>
        <div className="flex-container-2">
          <img className="group170" alt="" src={group170} />
        </div>
        <ContactUsButton/>
      </div>
    </div>
  );
};
export default Home;

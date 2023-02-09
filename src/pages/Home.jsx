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

    const handleChange_univName = (e)=>{
        e.preventDefault();
        setunivName(e.target.value);
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
                  alert("Bad Request , expected : "+(response.data.expected));
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
                    alert(error.message);
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
            <br/> 대학 인증 API
            </span>
            <span className="improve-your-deliver">
            <br/> 단 두줄의 코드로 <br/> 사용자의 메일과 대학 재학 여부를 인증하세요
            </span>

            {univcheck? 
            <div className="univName-container">
              <input type="text" className="univName-input" required={true} value={univName} onChange={handleChange_univName} placeholder=" ex) 홍익대학교"/>
              <button type="submit" className="test-button" onClick={handleCheckUniv}><img className='checkimg' src={checkimg}/></button>
            </div> 
            :
            <div className="univName-container">
              <input type="text" className="univName-input" required={true} value={univName} onChange={handleChange_univName} placeholder=" ex) 홍익대학교"/>
              <button type="submit" className="test-button" onClick={handleCheckUniv}>대학명 체크</button>
            </div> 
            }

            <div className="email-container">
              <input type="email" className="email-input" required={true} value={email} onChange={handleChange_email} placeholder=" ex) abc123@mail.hongik.ac.kr"/>
              <button type="submit" className="test-button" onClick={handleSubmit}>테스트</button>
            </div> 
            <div className="checkbox-container">
              <img src={checkbox} className="checkbox"/>
              <ul class="checkbox-content">
                <p className='check-text'>메일만 인증하는 <br/> 테스트를 위해서는 <br/> APIs 페이지를 <br/> 참고해주세요.</p>
              </ul>
            </div>
          </div>
          <div className="flex-container-div"></div>
          <div className="flex-container-1">
            <div class="w-full lg:w-1/3">
              <div className="info-container">
                UnivCert.certify("private Key", {email}, {univName}, true);
              </div>
              <div class="code-container">
                <pre class="flex items-center h-64 bg-gray-700 rounded shadow-xl ">                        
                  {color?
                    <code class="language-json hljs">
                      <span class="hljs-punctuation">&#123; </span><br/>
                          <span class="hljs-red"> "status"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">{status}</span><span class="hljs-punctuation">,</span><br/>
                          <span class="hljs-red"> "domain"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">{domain}</span><span class="hljs-punctuation">,</span> <br/>
                          <span class="hljs-red"> "univ_email"</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">{email1}</span><span class="hljs-punctuation">,</span><br/>
                          <span class="hljs-red"> "univ_name"</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">{univName1}</span><span class="hljs-punctuation">,</span><br/>
                          <span class="hljs-red"> "success"</span><span class="hljs-punctuation">:</span> <span class="hljs-purple">{success}</span><br/>
                      <span class="hljs-punctuation">&#125; </span>
                    </code>
                    :
                    <code class="language-json hljs">
                      <span class="hljs-punctuation">&#123; </span><br/>
                          <span class="hljs-green"> "status"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">{status}</span><span class="hljs-punctuation">,</span><br/>
                          <span class="hljs-green"> "domain"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">{domain}</span><span class="hljs-punctuation">,</span> <br/>
                          <span class="hljs-green"> "univ_email"</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">{email1}</span><span class="hljs-punctuation">,</span><br/>
                          <span class="hljs-green"> "univ_name"</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">{univName1}</span><span class="hljs-punctuation">,</span><br/>
                          <span class="hljs-green"> "success"</span><span class="hljs-punctuation">:</span> <span class="hljs-purple">{success}</span><br/>
                      <span class="hljs-punctuation">&#125; </span>
                    </code>
                  }
                  
                </pre>
              </div>
            </div>        
          </div>
        
      </div>
      <div className='footer-container'>
        <div className="flex-container-2">
          <img className="group170" src={group170} />
        </div>
        <ContactUsButton/>
      </div>
    </div>
  );
};
export default Home;

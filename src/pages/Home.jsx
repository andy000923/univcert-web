import React, {useState} from 'react';
import axios from 'axios';
import "./Home.css";
import expandMore1 from "../assets/expandMore1.svg";
import Frame34 from "../assets/group83.svg";
import search1 from "../assets/search1.svg";
import vector4 from "../assets/Vector4.png";
import group79 from "../assets/group79.svg";
import group82 from "../assets/Group82.png";
import Header from "../components/Header";
import ContactUsButton from '../components/ContactUsButton';
const Home = () => {
  const baseUrl = 'https://univcert.com/api';

  const [email, setemail] = useState();

  const handleChange_email = (e)=>{
      e.preventDefault();
      setemail(e.target.value);
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      axios.defaults.withCredentials = true;
      await axios
          .post(baseUrl + "/try", {
              email:email,
          },
          {
              withCredentials: true // 쿠키 cors 통신 설정
            })
          .then(response=>{
              console.log(response);
              console.log(email);
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
  const propsData = {
    frame32: {
      signUp: "SIGN UP",
      search1: search1,
      apIs: "APIs",
      login: "Login",
      expandMore1: expandMore1,
      documentation: "Documentation",
      pricing: "Pricing",
    },
    frame6: {
      abc123Navercom: "abc123@naver.com",
      submit: "Submit",
    },
    frame7: {
      text: "Text",
    },
    frame8: {
      text: "Text",
    },
    button: {
      button: "Contact Us",
    },
  };
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
          <div className="email-container">
            <input type="email" className="email-input" required={true} value={email} onChange={handleChange_email} placeholder="abc@example.com"/>
            <button type="submit" className="test-button" onClick={handleSubmit}>테스트</button>
          </div>   
        </div>
        <div className="flex-container-div"></div>
        <div className="flex-container-1">
          <div class="w-full lg:w-1/3">
            <div class="code-container">
              <pre class="flex items-center h-64 bg-gray-700 rounded shadow-xl ">                        
                <code class="language-json hljs">
                  <span class="hljs-punctuation">&#123; </span><br/>
                      <span class="hljs-attr"> "status"</span><span class="hljs-punctuation">:</span> <span class="hljs-number">200</span><span class="hljs-punctuation">,</span><br/>
                      <span class="hljs-attr"> "domain"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"mail.hongik.ac.kr"</span><span class="hljs-punctuation">,</span> <br/>
                      <span class="hljs-attr"> "univ_email"</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">{email}</span><span class="hljs-punctuation">,</span><br/>
                      <span class="hljs-attr"> "univ_name"</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">"홍익대학교"</span><span class="hljs-punctuation">,</span><br/>
                      <span class="hljs-attr"> "success"</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><br/>
                  <span class="hljs-punctuation">&#125; </span>
                </code>
              </pre>
            </div>
          </div>        
        </div>
      </div>
      <div className='footer-container'>
        <div className="flex-container-2">
          <img className="group-83" src={Frame34} />
          <span className="aeogbugbheumf">대학 도메인 기반 확실한 인증 로직</span>
          <img className="vector-4" src={vector4} />
          <span className="api">보안에 최적화 된 API</span>
          <img className="group-79" src={group79} />
          <span className="lvnpiygrakegh">소속명에 따라 메일 내용 변형</span>
          <div className="flex-container-3">
            <img className="group-81" src={group82} />
          </div>
          <span className="stiojaqvggolf">인증에 필요한 로직 불필요</span>
          <div className="flex-container-4">
           
          </div>
          <span className="api-1">초보자도 사용할 수 있는 API</span>
        </div>
        <ContactUsButton/>
      </div>
    </div>
  );
};
export default Home;

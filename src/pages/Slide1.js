import "./Slide1.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {useState} from 'react';
import axios from 'axios';

const Slide1 = () => {
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
          .post(baseUrl + "/login", {
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
  
  return (
    <div>
      <Header/>
      
      <section class="py-16">
        <div class="container px-4 mx-auto md:px-6">
            <div class="flex flex-col lg:flex-row lg:items-center">
                <div class="w-full mb-8 lg:w-1/2 lg:mr-20 lg:mb-0">
                    <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-primary-400 sm:leading-none sm:tracking-tight lg:text-6xl">
                        <span class="text-6xl lg:text-8xl">대학 인증 API</span>
                    </h1>
                    <p class="mt-4 text-3xl text-primary-100 lg:mb-8">
                        단 두줄의 코드로 <br/> 사용자의 메일과 대학 재학 여부를 인증하세요
                    </p>   
                    <div className="email-container">
                      <input type="email" className="email-input" required={true} value={email} onChange={handleChange_email} placeholder="abc@example.com"/>
                      <button type="submit" className="test-button" onClick={handleSubmit}>테스트</button>
                    </div>   
                </div>
                <div class="w-full lg:w-1/3">
                  <div class="code-container">
                    <pre class="flex items-center h-64 bg-gray-700 rounded shadow-xl">                        
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
        
    </section>

    <Footer/>
    
    </div>
    
  );
};
export default Slide1;

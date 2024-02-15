import "./Info.css"
import InfoSideBar from "../../components/InfoSideBar";
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
const Info3= () => {
  return (
    <div className="slide">
    <InfoSideBar/>
    <div className="slide1">
      <Header/>
      <div className="container">  
        <div className="img-container">
            <h1>발송된 인증코드 입력</h1>
            <div className="post-box">
              <div className="post">POST</div>
              <span className="post-api"><span className="hljs-grey">https://univcert.com</span>/api/v1/certifycode</span>
            </div>

            <div className="red-box">
              UnivCert.certifyCode("key", "email", "univName", 인증코드(int));
            </div>
            <h3>JSON Request (예시)</h3>
            <div className="gradle-container">
              <code className="code-container1">
              <span>&#123;</span><br/>
                <span>&emsp;&emsp;“key” : “부여받은 API KEY”,</span><br/>
                <span>&emsp;&emsp;"email” : “abc@mail.hongik.ac.kr”,</span><br/>
                <span>&emsp;&emsp;“univName” : “홍익대학교”,</span><br/>
                <span>&emsp;&emsp;“code” : 3816</span><br/>
                <span>&#125; </span>
              </code>
            </div>

            <h3>JSON Response (인증번호 일치)</h3>
            <div className="gradle-container">
              <code className="code-container1">
                <span>&#123;</span><br/>
                <span>&emsp;&emsp;“success” : true</span><br/>
                <span>&emsp;&emsp;“univName” : “홍익대학교”,</span><br/>
                <span>&emsp;&emsp;“certified_email” : “abc@mail.hongik.ac.kr”,</span><br/>
                <span>&emsp;&emsp;“certified_date” : “2023-01-03T09:30:22”</span><br/>
                <span>&#125; </span>
              </code>
            </div>
            <h3>JSON Response (실패)</h3>
            <div className="gradle-container">
              <code className="code-container1">
                <span>&#123;</span><br/>
                <span>&emsp;&emsp;“status” : 400,</span><br/>
                <span>&emsp;&emsp;"success" : false,</span><br/>
                <span>&emsp;&emsp;"message" : 응답 값 참고</span><br/>
                <span>&#125; </span>
              </code>
            </div>
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Info3;
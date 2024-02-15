import "./Info.css"
import InfoSideBar from "../../components/InfoSideBar";
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
const Info4= () => {
  
  return (
    <div className="slide">
    <InfoSideBar/>
    <div className="slide1">
      <Header/>
      <div className="container">  
        <div className="img-container">
            <h1>인증된 이메일인지 확인</h1>
            <div className="post-box">
              <div className="post">POST</div>
              <span className="post-api"><span className="hljs-grey">https://univcert.com</span>/api/v1/status</span>
            </div>

            <div className="red-box">
              UnivCert.status("key", "email");
            </div>
            <h3>JSON Request</h3>
            <div className="gradle-container">
              <code className="code-container1">
              <span>&#123;</span><br/>
                <span>&emsp;&emsp;“key” : “부여받은 API KEY”,</span><br/>
                <span>&emsp;&emsp;"email” : “abc@mail.hongik.ac.kr”,</span><br/>
                <span>&#125; </span>
              </code>
            </div>

            <h3>JSON Response (성공)</h3>
            <div className="gradle-container">
              <code className="code-container1">
                <span>&#123;</span><br/>
                <span>&emsp;&emsp;“success” : true</span><br/>
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
export default Info4;
import "./Info.css"
import InfoSideBar from "../../components/InfoSideBar";
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
const Info2= () => {
  return (
    <div className="slide">
    <InfoSideBar/>
    <div className="slide1">
      <Header/>
      <div className="container">  
        <div className="img-container">
            <h1>이용자 메일 인증 시작</h1>
            <div className="post-box">
              <div className="post">POST</div>
              <span className="post-api"><span className="hljs-grey">https://univcert.com</span>/api/v1/certify</span>
            </div>

            <div className="red-box">
              UnivCert.certify("key", "email", "univName", univ_check(bool));
            </div>
            <h3>JSON Request</h3>
            <div className="gradle-container">
              <code className="code-container1">
              <span>&#123;</span><br/>
                <span>&emsp;&emsp;“key” : “부여받은 API KEY”,</span><br/>
                <span>&emsp;&emsp;"email” : “abc@mail.hongik.ac.kr”,</span><br/>
                <span>&emsp;&emsp;“univName” : “홍익대학교”,</span><br/>
                <span>&emsp;&emsp;“univ_check” : true</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;(true라면 해당 대학 재학 여부, false라면 메일 소유자 인증만)</span><br/>
                <span>&#125; </span>
              </code>
            </div>

            <h3>JSON Response (인증번호 발송 성공)</h3>
            <div className="gradle-container">
              <code className="code-container1">
                <span>&#123;</span><br/>
                <span>&emsp;&emsp;“success” : true</span><br/>
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
export default Info2;
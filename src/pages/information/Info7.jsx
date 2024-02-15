import "./Info.css"
import InfoSideBar from "../../components/InfoSideBar";
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
const Info7= () => {
return (
<div className="slide">
    <InfoSideBar/>
    <div className="slide1">
      <Header/>
      <div className="container">  
        <div className="img-container">
            <h1>인증 가능한 대학교 명인지 체킹</h1>
            <div className="post-box">
              <div className="post">POST</div>
              <span className="post-api"><span className="hljs-grey">https://univcert.com</span>/api/v1/check</span>
            </div>

            <div className="red-box">
            UnivCert.check("univName");
            </div>
            <h3>JSON Request</h3>
            <div className="gradle-container">
              <code className="code-container1">
                <span>&#123;</span><br/>
                <span>&emsp;&emsp;“univName” : “인증 요청 할 대학명”</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp; (올바른 대학명인지, 22년 입학생 수 상위 150개 이내에 드는 학교인지)</span><br/>
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
export default Info7;
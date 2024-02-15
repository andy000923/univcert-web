import "./Info.css"
import InfoSideBar from "../../components/InfoSideBar";
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
const Info5= () => {
  
  return (
    <div className="slide">
    <InfoSideBar/>
    <div className="slide1">
      <Header/>
      <div className="container">  
        <div className="img-container">
            <h1>인증된 유저 리스트 출력</h1>
            <div className="post-box">
              <div className="post">POST</div>
              <span className="post-api"><span className="hljs-grey">https://univcert.com</span>/api/v1/certifiedlist</span>
            </div>

            <div className="red-box">
            UnivCert.list("key");
            </div>
            <h3>JSON Request</h3>
            <div className="gradle-container">
              <code className="code-container1">
                <span>&#123;</span><br/>
                <span>&emsp;&emsp;“key” : “부여받은 API KEY”,</span><br/>
                <span>&#125; </span>
              </code>
            </div>

            <h3>JSON Response (성공)</h3>
            <div className="gradle-container">
              <code className="code-container1">
                <span>&#123;</span><br/>
                <span>&emsp;&emsp;"data": [</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&#123;</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"email": "insi2000@mail.hongik.ac.kr",</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"univName": "홍익대학교",</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;“certified_date”: “2023-01-26T04:52:04.179837”,</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"count": 1,</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"certified": true</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&#125;,</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&#123;</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;...</span><br/>
                <span>&emsp;&emsp;&emsp;&emsp;&#125;</span><br/>
                <span>&emsp;&emsp;],</span><br/>
                <span>&emsp;&emsp;"success": true</span><br/>
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
export default Info5;
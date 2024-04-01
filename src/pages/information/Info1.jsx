import "./Info.css"
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
import InfoSideBar from "../../components/InfoSideBar";
import Java from "../../assets/java_logo.png"
import Kotlin from "../../assets/kotlin_logo.png"
const Info1 = () => {
  return (
    <div className="slide">
      <InfoSideBar/>
      <div className="slide1">
        <Header/>
        <div className="container">  
          <div className="img-container">
              <h1>바로 시작하기</h1>
              <h3>🧑‍💻 자바 사용자 간편 라이브러리 등록</h3>
              <div className="gradle-container">
                <code className="title-container">
                    <span>build.gradle에 해당 코드 두 줄 추가</span>
                </code>
              </div>
              <div className="gradle-container">
                <code className="code-container1">
                    <span>repositories&#123;</span><br/>
                    <span>&emsp;&emsp;&emsp;...</span><br/>
                    <span>&emsp;&emsp;&emsp;maven&#123;url 'https://jitpack.io'&#125;</span><br/>
                    <span>&#125;</span><br/><br/>
                    <span>dependencies&#123;</span><br/>
                    <span>&emsp;&emsp;&emsp;...</span><br/>
                    <span>&emsp;&emsp;&emsp;implementation <span class="hljs-red">'com.github.in-seo:univcert:master-SNAPSHOT'</span></span><br/>
                    <span>&#125; </span>
                </code>
                <div className="lang-logo"><img src={Java} alt="java" width="50px" height="50px"/></div>
              </div>
              <h3>🧑‍💻 코틀린 사용자 간편 라이브러리 등록</h3>
              <div className="gradle-container">
                <code className="code-container1">
                    <span>repositories&#123;</span><br/>
                    <span>&emsp;&emsp;&emsp;...</span><br/>
                    <span>&emsp;&emsp;&emsp;maven&#123; url = uri("https://jitpack.io") &#125;</span><br/>
                    <span>&#125;</span><br/><br/>
                    <span>dependencies&#123;</span><br/>
                    <span>&emsp;&emsp;&emsp;...</span><br/>
                    <span>&emsp;&emsp;&emsp;implementation (<span class="hljs-red">"com.github.in-seo:univcert:master-SNAPSHOT"</span>) &#123;</span><br/>
                    <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;exclude(group = "org.hamcrest", module = "hamcrest-core")</span><br/>
                    <span>&emsp;&emsp;&emsp;&#125;</span><br/>
                    <span>&#125;</span>
                </code>
                <div className="lang-logo"><img src={Kotlin} alt="kotlin" width="50px" height="50px"/></div>
              </div>
              <div className="blue-container">
                <div className="blue-box">
                  <span className="hljs-pink">Request 속성</span><br/>
                  <span>Key: 부여받은 API_Key</span><br/>
                  <span>univName : 대학교명</span><br/>
                  <span>email : 이용자 이메일</span><br/>
                  <span>univ_check : 대학 재학 여부(도메인) 체킹 [boolean]</span><br/>
                  <span>(true라면 해당 대학 재학 여부, false라면 메일 소유 인증만)</span><br/>
                  <span>code : 전송된 인증번호 (4자리)</span>
                </div>
                <div className="blue-box">
                  <span className="hljs-pink">Response 속성</span><br/>
                  <span>success : API 통신 성공 여부</span><br/>
                  <span>message : success가 false 시에 전달되는 오류 메시지</span><br/>
                  <span>certified_email : 인증된 이메일</span><br/>
                  <span>certified_date : 해당 메일이 인증된 일자</span><br/>
                  <span>data : 회원 jsonArray List 출력값</span>
                </div>
              </div>
              <h3>✉ 이용자 메일 인증 시작 (인증코드 발송)</h3>
              <div className="red-box">
                UnivCert.certify("key", "email", "univName", univ_check(bool));
              </div>
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

              <h3>✅ 이용자 메일에 발송된 코드를 전달 받아 인증 받기</h3>
              <div className="red-box">
                UnivCert.certifyCode("key", "email", "univName", 인증코드(int));
              </div>
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
          </div>
          <div className="contact-container">
              <ContactUsButton/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info1;
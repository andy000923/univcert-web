import "./Info.css"
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
import InfoSideBar from "../../components/InfoSideBar";
import f1_1 from "../../assets/f1_1.png";
import f1_2 from "../../assets/f1_2.png";
const Info1 = () => {
  return (
    <div className="slide1">
      <Header/>

      <div className="container">
  
        <InfoSideBar/>
        <div className="img-container">
            <img className="FrameImg" alt="" src={f1_1} />
            <div className="gradle-container">
              <code className="code-container1">
                  <span>repositories&#123;</span><br/>
                  <span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</span><br/>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maven&#123;url 'https://jitpack.io'&#125;</span><br/>
                  <span>&#125;</span><br/><br/>
                  <span>dependencies&#123;</span><br/>
                  <span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</span><br/>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;implementation <span class="hljs-red">'com.github.in-seo:univcert:master-SNAPSHOT'</span></span><br/>
                  <span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</span><br/>
                  <span>&#125; </span>
              </code>
            </div>
            <img className="FrameImg" alt="" src={f1_2} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>

    </div>
  );
};
export default Info1;

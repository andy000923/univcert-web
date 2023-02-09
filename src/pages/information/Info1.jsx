import "./Info.css"
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ContactUsButton from '../../components/ContactUsButton';
import f1_1 from "../../assets/f1_1.png";
import f1_2 from "../../assets/f1_2.png";
import reference from "../../assets/REFERENCE.png";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Frame3 from "../../assets/Frame3.png";
import Frame4 from "../../assets/Frame4.png";
import Frame5 from "../../assets/Frame5.png";
import Frame6 from "../../assets/Frame6.png";
const Info1 = () => {
  const navigate = useNavigate();

  const goTo1 = () => {
    navigate("/instruction");
  };
  const goTo2 = () => {
    navigate("/instruction1");
  };
  const goTo3 = () => {
    navigate("/instruction2");
  };
  const goTo4 = () => {
    navigate("/instruction3");
  };
  const goTo5 = () => {
    navigate("/instruction4");
  };

  return (
    <div className="slide1">
      <Header/>

      <div className="container">
  
        <div className="frame-container">
          <img className="Frame" src={Frame1} onClick={goTo1}/>
          <img className="reference" src={reference} />
          <img className="Frame" src={Frame2} onClick={goTo2}/>
          <img className="Frame" src={Frame3} onClick={goTo3}/>
          <img className="Frame" src={Frame4} onClick={goTo4}/>
          <img className="Frame" src={Frame5} onClick={goTo5}/>
          <a href="https://incredible-raincoat-c52.notion.site/cdb55dd7ea5b475eaaf94ce76fa9eba4" target="_blank">
            <img className="Frame" src={Frame6} />
          </a>
        </div>
        <div className="img-container">
            <img className="FrameImg" src={f1_1} />
            <div className="gradle-container">
              <code className="code-container1">
                  <span>repositories&#123;</span><br/>
                  <span >&nbsp;&nbsp;&nbsp;&nbsp;...</span><br/>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;maven&#123;url 'https://jitpack.io'&#125;</span><br/>
                  <span>&#125;</span><br/><br/>
                  <span>dependencies&#123;</span><br/>
                  <span >&nbsp;&nbsp;&nbsp;&nbsp;...</span><br/>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;implementation <span class="hljs-red">'com.github.in-seo:univcert:master-SNAPSHOT'</span></span><br/>
                  <span >&nbsp;&nbsp;&nbsp;&nbsp;...</span><br/>
                  <span class="hljs-punctuation">&#125; </span>
              </code>
            </div>
            <img className="FrameImg" src={f1_2} />
        </div>
        <div className="contact-container">
            <ContactUsButton/>
        </div>
      </div>

    </div>
  );
};
export default Info1;

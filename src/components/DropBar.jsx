import { useNavigate } from "react-router-dom";
import "./DropBar.css";
const DropBar = (props) => {
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
  const goTo7 = () => {
    navigate("/instruction5");
  }

  // 스타일 변경 함수를 React 스타일로 수정
  const changeColor = (element) => {
    element.style.color = "#5287C6";
  }

  const restoreColor = (element) => {
    element.style.color = "";
     // 이전 색상으로 돌아가게 하려면 빈 문자열을 할당
  }

  return (
    <div className="frame1-container">
      <p className="lists" onClick={goTo1} onMouseOver={e => changeColor(e.target)} onMouseOut={e => restoreColor(e.target)}>빠른 시작</p>
      <p className="lists" onClick={goTo2} onMouseOver={e => changeColor(e.target)} onMouseOut={e => restoreColor(e.target)}>이용자 메일 인증 시작</p>
      <p className="lists" onClick={goTo3} onMouseOver={e => changeColor(e.target)} onMouseOut={e => restoreColor(e.target)}>발송된 인증 코드 입력</p>
      <p className="lists" onClick={goTo4} onMouseOver={e => changeColor(e.target)} onMouseOut={e => restoreColor(e.target)}>인증된 이메일인지 확인</p>
      <p className="lists" onClick={goTo5} onMouseOver={e => changeColor(e.target)} onMouseOut={e => restoreColor(e.target)}>인증된 유저리스트 출력</p>
      <p className="lists" onClick={goTo7} onMouseOver={e => changeColor(e.target)} onMouseOut={e => restoreColor(e.target)}>대학명 체크</p>
      <a href="https://incredible-raincoat-c52.notion.site/cdb55dd7ea5b475eaaf94ce76fa9eba4">
        <p className="lists" onMouseOver={e => changeColor(e.target)} onMouseOut={e => restoreColor(e.target)}>인증가능 대학 명단</p>
      </a>
    </div>
  );
};

export default DropBar;

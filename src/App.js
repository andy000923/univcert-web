import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css"

function App() {
  return (
    <div className="home-main">              
      <div className="signup-main">
          <div>                        
              <div id="MODAL_BODY" class="ModalBody Body_body__KI0OY SignUpOrLogin_modal__VDGVH">
                  <div class="TextPanel_className__J3J2W">
                      <h1>대학생을 위한<br/>인증 플랫폼, univcert!</h1><h2>커리어 성장과 행복을 위한 여정<br/> 지금 univcert에서 시작하세요.</h2>
                  </div>
                  <div class="InputPanel_wrapper__RXp1k">
                      <input class="InputPanel_password__my_BO" type="password" autocomplete="password"></input>
                      <div class="style_wrapper__6RiUK InputPanel_email__aEAmZ">
                          <label for="email" class="style_label__BKYHB">이메일</label>
                          <div class="style_body__A6XnO">
                              <input type="email" placeholder="이메일을 입력해 주세요." id="email" ></input>
                          </div>
                          <div class="style_guidance__FT8Qs input-group-guidance"></div>
                      </div>
                      <div class="InputPanel_buttons__w391m">
                          <button type="button" class="style_wrapper__IgK7U email-login-button"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-width="2"><rect width="17.2" height="14" x="3.4" y="5" rx="3"></rect><path d="M3.2 5.6L12 12l8.8-6.4"></path></g></svg>이메일로 계속하기
                          </button>
                          <div class="InputPanel_divider__WEgZ3"></div>
                          <div class="InputPanel_socialLogins__j0wq7">다음 계정으로 계속하기</div>
                          <div class="InputPanel_socialWrapper__Dhaxo isKR">
                              <div class="InputPanel_socialButton__Hggw2 isKR">
                                  
                              </div>
                              <div class="InputPanel_socialButton__Hggw2 isKR">
                                  
                              </div>
                              <div class="InputPanel_socialButton__Hggw2 isKR">
                                  
                              </div>
                              <div class="InputPanel_socialButton__Hggw2 isKR">
                            
                              </div>
                          </div>
                      </div>
                      <p class="style_wrapper__MbwMv">걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.<br/>회원가입 시 <a class="loginModalAnchor" href="https://help.wanted.co.kr/hc/ko/articles/360035484292" target="_blank">개인정보 처리방침</a>과 <a class="loginModalAnchor" href="https://help.wanted.co.kr/hc/ko/articles/360035844551" target="_blank">이용약관</a>을 확인하였으며, 동의합니다.</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="advertisement-main">
        여기에 광고
      </div>
  </div>
  );
}

export default App;

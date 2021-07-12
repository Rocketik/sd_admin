import React from "react";

import ResetPassword from "./ResetPassword";

export default function ResetPasswordLevel2() { 
  const sendRequest = (e) => {
    e.preventDefault();
  };
  const handleCodeInputs = (e) => {
    const target = e.target;
    if (e.code !== "Backspace") {
      const nextTarget = target.nextSibling;
      if (e.keyCode > 47 && e.keyCode < 58) {
        if(target.value === ""){
          target.value = e.key; 
        }
        if (nextTarget) {
          nextTarget.focus();
        }
      } 
      e.preventDefault();
    }else{
      const previousTarget = target.previousSibling;
      if (previousTarget &&  target.value === "" ) {
        previousTarget.focus();
      }
      target.value = ""; 
    } 
  };
  return (
    <ResetPassword title="Վերականգնել գաղտնաբառը">
      <div className="auth_inner_content">
        <form onSubmit={sendRequest}>
          <div className="auth_inner_content_title">
            <h2>Մուտքագրեք ուղարկված կոդը</h2>
          </div>
          <div className="auth_inner_content_code-inputs">
            <input
              type="text"
              maxLength="1"
              id="codeInput1"
              name="codeInput1"
              onKeyDown={handleCodeInputs}
              className="code-input"
            />
            <input
              type="text"
              maxLength="1"
              id="codeInput2"
              name="codeInput2"
              onKeyDown={handleCodeInputs}
              className="code-input"
            />
            <input
              type="text"
              maxLength="1"
              id="codeInput3"
              name="codeInput3"
              onKeyDown={handleCodeInputs}
              className="code-input"
            />
            <input
              type="text"
              maxLength="1"
              id="codeInput4"
              name="codeInput4"
              onKeyDown={handleCodeInputs}
              className="code-input"
            />
          </div>

          <div className="auth_inner_content_submit">
            <button>Հաստատել</button>
          </div>
        </form>
      </div>
    </ResetPassword>
  );
}

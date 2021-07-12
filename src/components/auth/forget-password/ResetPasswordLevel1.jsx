import React from "react";

import ResetPassword from "./ResetPassword";

export default function ResetPasswordLevel1() {
  const sendRequest = (e) => {
    e.preventDefault();
  };
  return (
    <ResetPassword title="Վերականգնել գաղտնաբառը">
      <div className="auth_inner_content">
        <form onSubmit={sendRequest}>
          <div className="auth_inner_content_input-raw">
            <input
              type="text"
              name="email"
              id="login_email"
              placeholder="*էլ,փոստ"
              className="auth-input"
            />
          </div>

          <div className="auth_inner_content_submit">
            <button>Ուղարկել</button>
          </div>
        </form>
      </div>
    </ResetPassword>
  );
}

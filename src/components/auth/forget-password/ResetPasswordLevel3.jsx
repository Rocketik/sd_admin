import React from "react";

import ResetPassword from "./ResetPassword";

export default function ResetPasswordLevel3() {
  const sendRequest = (e) => {
    e.preventDefault();
  };
  return (
    <ResetPassword title="Նոր գաղտնաբառ">
      <div className="auth_inner_content">
        <form onSubmit={sendRequest}>
          <div className="auth_inner_content_input-raw">
            <input
              type="password"
              name="password"
              id="reset-password_set-password_password"
              placeholder="*գաղտաբառ"
              className="auth-input"
            />
          </div>
          <div className="auth_inner_content_input-raw">
            <input
              type="password"
              name="repeat-password"
              id="reset-password_set-password_repeat-password"
              placeholder="*կրկնել"
              className="auth-input"
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

import React from "react";
import { Link } from "react-router-dom";
export default function LoginContent() {
  return (
    <div className="auth_inner_content">
      <form>
        <div className="auth_inner_content_input-raw">
          <input
            type="text"
            name="email"
            id="login_email"
            placeholder="*էլ,փոստ"
            className="auth-input"
          />
        </div>
        <div className="auth_inner_content_input-raw">
          <input
            type="password"
            name="password"
            id="login_password"
            placeholder="Գաղտնաբառ"
            className="auth-input"
          />
        </div>
        <div className="auth_inner_content_forget-password">
          <Link to="/forget-password/checkEmail">Մոռացե՞լ եք գաղտնաբառը</Link>
        </div>

        <div className="auth_inner_content_submit">
          <button>Մուտք</button>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import "../auth.scss"
import logo from "../../../assets/images/logo.png";
import LoginContent from './LoginContent';

export default function Login() {
  return (
    <div className="auth">
      <div className="auth_inner">
        <div className="auth_inner_header with-logo">
          <div className="auth_inner_header_image">
              <img src={logo} alt="" />  
          </div>
          <div className="auth_inner_header_title">
            <p>Ադմին Պանել</p>
          </div>
        </div>
        <LoginContent />
        
      </div>
    </div>
  );
}

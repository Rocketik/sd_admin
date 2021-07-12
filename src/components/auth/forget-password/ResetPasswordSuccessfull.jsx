import React from "react";
import successfullImage from "../../../assets/images/reset-password-successfull.png";

export default function ResetPasswordSuccessfull() {
  
  return (
    <div className="auth">
      <div className="auth_inner auth_inner-success" >
         <p>Գաղտնաբառը վերականգնված է</p>
         <img src={successfullImage} alt=""  />
      </div>
    </div>
  );
}

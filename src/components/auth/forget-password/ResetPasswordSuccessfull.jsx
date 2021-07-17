import React, { useEffect } from "react";
import successfullImage from "../../../assets/images/reset-password-successfull.png";
import { useHistory } from 'react-router-dom';

export default function ResetPasswordSuccessfull() {
  const history = useHistory();
  useEffect(() => {
    const changePage = setTimeout(()=>{
      history.push("/")
    },1000)
    return () => {
      clearTimeout(changePage)
    }
  }, [])
  return (
    <div className="auth">
      <div className="auth_inner auth_inner-success" >
         <p>Գաղտնաբառը վերականգնված է</p>
         <img src={successfullImage} alt=""  />
      </div>
    </div>
  );
}

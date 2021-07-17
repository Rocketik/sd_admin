import React, { useState } from "react";

import ResetPassword from "./ResetPassword";
import { userValidation } from './../../../js/validation/index';
import { inoToast } from './../../toast/toast';
import { doRequest } from "../../../js/lib/front-libik";
import { host, requestRoutes } from './../../../js/config';
import { useHistory } from "react-router-dom";
import Loading from './../../loading/Loading';

export default function ResetPasswordLevel1() {
  const history = useHistory();
  const [isLoadingOpen, setisLoadingOpen] = useState(false);

  const sendRequest = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    const reqData = {
      email: formElements.email ? formElements.email.value : null, 
    };
    const { error } = userValidation(reqData, ["password"] );
    if (error) {  
      inoToast.error( error.details[0].message.toUpperCase() );
    }else{
      setisLoadingOpen(previos => !previos);
      doRequest({
        method: "post",
        url: host + requestRoutes.resetPasswordFirst(),
        data: reqData,
      })
      .then(({ data }) => {
        setisLoadingOpen(previos => !previos);
        inoToast.success("Successfully")
        // setTimeout(() => { 
          history.push({
            pathname: "/forget-password/verifyEmail", 
            params : { 
                token : data.token
            }
          });
        // }, 1000);
      })
      .catch( err => { 
        setisLoadingOpen(previos => !previos);
        inoToast.error( err.toUpperCase() )
      });
      
    }
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
      {  isLoadingOpen && <Loading  type="spin" /> }
    </ResetPassword>
    
  );
}

import React from "react";

import ResetPassword from "./ResetPassword";
import { inoToast } from './../../toast/toast'; 
import { doRequest } from "../../../js/lib/front-libik";
import { host, requestRoutes } from './../../../js/config';
import { useHistory } from 'react-router-dom';

export default function ResetPasswordLevel3( props ) { 
  const history = useHistory();
  console.log(props);
  const sendRequest = (e) => {
    
    e.preventDefault();
    const formElements = e.target.elements;
    const reqData = {
      "new-password": formElements.password ? formElements.password.value : null,  
    };  
   
    if(formElements["repeat-password"].value != formElements.password.value ){
      inoToast.error("Password and Repat password dosnt equal")
    }else{
   
      doRequest({
        method: "post",
        url: host + requestRoutes.resetPasswordThird(),
        data: reqData,
        headers: {
          token : props.location.params.token 
        } 
      })
      .then(( ) => {
        
        inoToast.success(" Successfully")
        setTimeout(() => { 
          history.push({
            pathname: "/forget-password/success", 
          });
        }, 1000);
      })
      .catch( err => { 
        inoToast.error( err.toUpperCase() )
      });
    }
 
      
     
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

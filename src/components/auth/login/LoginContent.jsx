import React,{ useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { userValidation } from "./../../../js/validation/index";
import { doRequest } from "../../../js/lib/front-libik";
import { host, requestRoutes } from "./../../../js/config"; 
import { inoToast } from './../../toast/toast';
import Loading from './../../loading/Loading';

export default function LoginContent() { 
  const history = useHistory();
  const [isLoadingOpen, setisLoadingOpen] = useState(false);

  const submitLogin = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    const reqData = {
      email: formElements.email ? formElements.email.value : null,
      password: formElements.password ? formElements.password.value : null,
    };
    
    const { error } = userValidation(reqData);
    if (error) {  
      inoToast.error( error.details[0].message.toUpperCase() )
    } else { 
      setisLoadingOpen(previos => !previos);
      doRequest({
        method: "post",
        url: host + requestRoutes.login(),
        data: reqData,
      })
      .then(({ data }) => {
        setisLoadingOpen(previos => !previos);
        localStorage.token = data.token;
        inoToast.success("Logened Successfully")
        setTimeout(() => { 
          history.push("/admin/gallery");
        }, 2000);
      })
      .catch( err => { 
        setisLoadingOpen(previos => !previos);
        inoToast.error( err.toUpperCase() )
      })
    }
  };
  return (
    <>
    <div className="auth_inner_content">
      <form onSubmit={submitLogin}>
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
    {  isLoadingOpen && <Loading type="spin" /> }
    </>
  );
}

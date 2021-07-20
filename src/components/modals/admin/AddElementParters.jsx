import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import closeIcon from "../../../assets/images/closeIcon.png";
import inputTypeFileIcon from "../../../assets/images/inputTypeFileIcon.png";
import { doRequest } from "../../../js/lib/front-libik"; 
import { host, requestRoutes } from "./../../../js/config";
import { getPartenrsData } from "./../../../js/requests";
import { isAuthTokenHasExpired } from './../../../js/lib/front-libik';
import { inoToast } from './../../toast/toast';

export default function AddElementParters({ closeModal, updateData }) {
  const history = useHistory();
  const sendRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const reqBody = new FormData(form);
    const reqData = {
      method: "post",
      url: host + requestRoutes.partners("form"),
      data: reqBody,
      headers: {
        token: localStorage.token,
        "Content-Type": "multipart/form-data",
      },
    }; 
    doRequest(reqData)
      .then((   )  => {
        getPartenrsData((data) => {
            updateData(data);
            closeModal();

        }); 
      })
      .catch(( err ) => {
         if(err.noBackend){
           inoToast.error("Something went wrong");
           console.log(err);
         }
         isAuthTokenHasExpired(err,history);
         inoToast.error(err) 
          
      });
  
    };

  return (
    <div className="menu-drawer-add-modal modal-content">
      <div className="menu-drawer-add-modal_header">
        <img
          src={closeIcon}
          className="closeIcon"
          onClick={closeModal}
          alt=""
        />
      </div>
      <div className="menu-drawer-add-modal_content">
        <form onSubmit={sendRequest} >
          <div className="menu-drawer-add-modal_content_image">
            <img
              src={inputTypeFileIcon}
              className="input-file-target"
              alt=""
              width="128"
              height="128"
              id="input-file-target_img"
              onClick={() =>
                document
                  .getElementById("menu-drawer-add-modal_image_img")
                  .click()
              }
            />
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              name="img"
              id="menu-drawer-add-modal_image_img"
              style={{ display: "none" }}
              onChange={(e)=>document.getElementById('input-file-target_img').src = window.URL.createObjectURL(e.target.files[0])}
            />
          </div>
          <div className="menu-drawer-add-modal_content_submit">
            <button>Ավելացնել</button>
          </div>
        </form>
      </div>
    </div>
  );
}

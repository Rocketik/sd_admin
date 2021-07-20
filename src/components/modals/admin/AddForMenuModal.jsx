import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import closeIcon from "../../../assets/images/closeIcon.png";
import inputTypeFileIcon from "../../../assets/images/inputTypeFileIcon.png";
import { doRequest } from "../../../js/lib/front-libik";
import { GalleryContext } from "../../admin/gallery/Gallery";
import { host, requestRoutes } from "./../../../js/config";
import { getGalleryData } from "./../../../js/requests";
import { isAuthTokenHasExpired } from './../../../js/lib/front-libik';
import { inoToast } from './../../toast/toast';

export default function AddForMenuModal({ closeModal }) {
  const GalleryContextVal = useContext(GalleryContext);
  const history = useHistory();
  const sendRequest = (e) => {
    e.preventDefault();
    const form = e.target;

    const reqBody = new FormData(form);

    const reqData = {
      method: "post",
      url: host + requestRoutes.projects("form"),
      data: reqBody,
      headers: {
        token: localStorage.token,
        "Content-Type": "multipart/form-data",
      },
    }; 
    doRequest(reqData)
      .then((   )  => {
        getGalleryData((data) => {
          GalleryContextVal(data);
        });
        closeModal();
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
          <div className="menu-drawer-add-modal_content_grid-container">
            <label>Ընտրել բաժինը</label>
            <div className="menu-drawer-add-modal_content_row_inputs">
              <select name="project-type" id="menu-drawer-add_section">
                <option value="1">Դիզայն</option>
                <option value="2">Արտաքին գովազդ</option>
                <option value="3">Տպագրություն</option>
                <option value="4">Լազերային և ֆրեզերային փորագրություն</option>
              </select>
            </div>

            <label htmlFor="menu-drawer-add_section">Վերնագիրը</label>
            <div className="menu-drawer-add-modal_content_row_inputs">
              <input type="text" name="title-hy" placeholder="հայերեն" />
              <input type="text" name="title-en" placeholder="անգլերեն" />
            </div>

            <label>Մեդիա</label>
            <div className="menu-drawer-add-modal_content_row_inputs">
              <img
                src={inputTypeFileIcon}
                className="input-file-target"
                alt=""
                width="24"
                id="input-file-target_cover-img"
                onClick={() =>
                  document
                    .getElementById("menu-drawer-add-modal_image_cover-img")
                    .click()
                }
              />
              <input
                type="file"
                onChange={(e)=>document.getElementById('input-file-target_cover-img').src = window.URL.createObjectURL(e.target.files[0])}
                accept="image/png, image/gif, image/jpeg"
                name="cover-img"
                id="menu-drawer-add-modal_image_cover-img"
                style={{ display: "none" }}
              />
            </div>
            <input
              type="text"
              name="order"
              value="1"
              style={{ display: "none" }}
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

import React from "react";
import closeIcon from "../../../assets/images/closeIcon.png";
import inputTypeFileIcon from "../../../assets/images/inputTypeFileIcon.png";

export default function AddForMenuModal({ closeModal }) {
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
        <form>
          <div className="menu-drawer-add-modal_content_image">
            <img src={inputTypeFileIcon} className="input-file-target" alt="" onClick={()=>document.getElementById('menu-drawer-add-modal_image_cover-img').click()} />
            <input type="file" accept="image/png, image/gif, image/jpeg" name="cover-img"  id="menu-drawer-add-modal_image_cover-img"  style={{ display: "none" }} />
          </div>
          <div className="menu-drawer-add-modal_content_grid-container">
            <label>Ընտրել բաժինը</label>
            <div className="menu-drawer-add-modal_content_row_inputs">
              <select name="section" id="menu-drawer-add_section">
                <option value="design">Դիզայն</option>
                <option value="programming">Ծրագրավորում</option>
                <option value="seo">Թմի ղեկավարում</option>
              </select>
            </div>
     
            <label htmlFor="menu-drawer-add_section">Վերնագիրը</label>
            <div className="menu-drawer-add-modal_content_row_inputs">
              <input type="text" name="en_title" placeholder="հայերեն" />
              <input type="text" name="am_title" placeholder="անգլերեն" />
            </div>
         
            <label>Մեդիա</label>
            <div className="menu-drawer-add-modal_content_row_inputs">
              <img src={inputTypeFileIcon} className="input-file-target" alt="" width="24" onClick={()=>document.getElementById('menu-drawer-add-modal_image_cover-img').click()} />
              <input type="file" accept="image/png, image/gif, image/jpeg" name="cover-img"  id="menu-drawer-add-modal_image_cover-img"  style={{ display: "none" }} />
            </div>
          </div>
          <div className="menu-drawer-add-modal_content_submit">
            <button>Ավելացնել</button>
          </div>
        </form>
      </div>
    </div>
  );
}

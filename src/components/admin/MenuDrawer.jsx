import React, { useState } from 'react';
import "./admin.scss";
import logo from "../../assets/images/logo-white.png"
import { Link } from 'react-router-dom';
import addIcon from "../../assets/images/addIcon.svg";
import Modal from './../modals/Modal';
import { changeModalState } from './../../js/lib/front-libik'; 
import AddForMenuModal from './../modals/admin/AddForMenuModal';

export default function MenuDrawer() {  

    const [isAddForMenuModalOpen, setisAddForMenuModalOpen] = useState(false);
    const openAddForMenuModal = (e) => { 
        changeModalState(setisAddForMenuModalOpen);
    };

    return (
        <>
        <div className="admin_menu-drawer">
            <div className="admin_menu-drawer_logo">
                <img src={logo} alt=""  />
            </div>
            <div className="admin_menu-drawer_navbar">
                <ul>
                    <li> <Link to="/admin/gallery">ՏԵՍԱԴԱՐԱՆ</Link> </li>
                    <li> <Link to="/admin/partners">ԳՈՐԾԸՆԿԵՐՆԵՐ</Link> </li>
                </ul>
                <button onClick={ openAddForMenuModal } ><img src={addIcon} alt="" /> Ավելացնել </button>
            </div>
            
        </div>
        {isAddForMenuModalOpen && (
        <Modal>
          <AddForMenuModal  closeModal={() => changeModalState(setisAddForMenuModalOpen)} />
        </Modal>
      )  }
      
        </>
    )
}

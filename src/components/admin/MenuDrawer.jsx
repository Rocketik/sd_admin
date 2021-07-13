import React from 'react';
import "./admin.scss";
import logo from "../../assets/images/logo-white.png"
import { Link } from 'react-router-dom';
import addIcon from "../../assets/images/addIcon.svg";

export default function MenuDrawer() {
    return (
        <div className="admin_menu-drawer">
            <div className="admin_menu-drawer_logo">
                <img src={logo} alt=""  />
            </div>
            <div className="admin_menu-drawer_navbar">
                <ul>
                    <li> <Link to="/admin/gallery">ՏԵՍԱԴԱՐԱՆ</Link> </li>
                    <li> <Link to="/admin/partners">ԳՈՐԾԸՆԿԵՐՆԵՐ</Link> </li>
                </ul>
                <button><img src={addIcon} alt="" /> Ավելացնել </button>
            </div>
            
        </div>
    )
}

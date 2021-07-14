import React from "react";
import notificationImg from "../../assets/images/notification.png";
import { Link } from 'react-router-dom';

export default function AdminContentHeader({ title }) {
  return (
    <div className="admin_content_header">
      <h2 className="admin_content_header_title">{title}</h2>

      <div className="admin_content_header_notifications">
      <Link to="/admin/notifications">

          <p>Ծանուցումներ</p>
          <img src={notificationImg} alt="" />
      </Link>

      </div>

    </div>
  );
}

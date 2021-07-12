import React from "react";
import notificationImg from "../../assets/images/notification.png";

export default function AdminContentHeader({ title }) {
  return (
    <div className="admin_content_header">
      <h2 className="admin_content_header_title">{title}</h2>
      <div className="admin_content_header_notifications">
        <p>Ծանուցումներ</p>
        <img src={notificationImg} alt="" />
      </div>
    </div>
  );
}

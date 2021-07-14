import React from "react";

export default function NotificationsInner({ data }) {
  return (
    <div className="admin_content_mail_inner">
      <div className="admin_content_mail_inner_main-pat">
        <div className="admin_content_mail_inner_main-part_header">
          <img src={data.userImg} alt="" />
          <h2> {data.name} </h2>
        </div>
        <div className="admin_content_mail_inner_main-part_mail">
          <h2> {data.mail.title} </h2>
          <p> {data.mail.subject} </p>
        </div>
        <div className="admin_content_mail_inner_main-part_send-mail">
          <form>
            <textarea name="mailTextarea" cols="30" rows="10"></textarea>
          </form>
        </div>
        <div className="admin_content_mail_inner_main-part_submit">
          <button>
            ՊԱՏԱՍԽԱՆԵԼ{" "}
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8167 3.55759C15.8165 3.5574 15.8163 3.55718 15.8161 3.557L12.5504 0.306998C12.3057 0.0635292 11.91 0.0644353 11.6665 0.309123C11.423 0.553779 11.4239 0.949498 11.6686 1.193L13.8612 3.375H0.625C0.279813 3.375 0 3.65481 0 4C0 4.34518 0.279813 4.625 0.625 4.625H13.8612L11.6686 6.807C11.4239 7.0505 11.423 7.44621 11.6665 7.69087C11.91 7.93559 12.3058 7.93643 12.5504 7.693L15.8162 4.443C15.8163 4.44281 15.8165 4.44259 15.8167 4.4424C16.0615 4.19809 16.0607 3.80109 15.8167 3.55759Z"
                fill="#C4C4C4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

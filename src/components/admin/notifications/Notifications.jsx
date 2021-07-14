import React from "react";
import Admin from "./../Admin";
import AdminContentHeader from "./../AdminContentHeader";
import mailbox from "../../../assets/images/notification_mailbox.png";
import DialogItem from "./DialogItem";

const notificationsConfig = [
  {
    name: "Mailchimp",
    subject: null,
  },
  {
    name: "Screenlane",
    subject: null,
  },
  {
    name: "Stepan Sargsyan",
    subject:
      "զանգահարել ներքոնշյալ հեռախոսահամարով , որպիսի հաց ու պանիր ուտեք",
  },
  {
    name: "Emma Atoyan",
    subject: "Կից ներկայացված են քաղվածքներ 01.02.2021 , դուք դուռակեք երևի",
  },
  {
    name: "Marine Mikoyan",
    subject: "Խնդրում եմ ուղարկել գնային առաջարկ ։",
  },
  {
    name: "Seda Mkrtchyan",
    subject: "Մեր կազմակերպությունը ուղղարկում է ձեզ լիքը լիքը նամակներ",
  },
  {
    name: "Stepan Sargsyan",
    subject:
      "զանգահարել ներքոնշյալ հեռախոսահամարով , որպիսի հաց ու պանիր ուտեք",
  },
  {
    name: "Emma Atoyan",
    subject: "Կից ներկայացված են քաղվածքներ 01.02.2021 , դուք դուռակեք երևի",
  },
  {
    name: "Marine Mikoyan",
    subject: "Խնդրում եմ ուղարկել գնային առաջարկ ։",
  },
  {
    name: "Seda Mkrtchyan",
    subject: "Մեր կազմակերպությունը ուղղարկում է ձեզ լիքը լիքը նամակներ",
  },
  {
    name: "Stepan Sargsyan",
    subject:
      "զանգահարել ներքոնշյալ հեռախոսահամարով , որպիսի հաց ու պանիր ուտեք",
  },
  {
    name: "Emma Atoyan",
    subject: "Կից ներկայացված են քաղվածքներ 01.02.2021 , դուք դուռակեք երևի",
  },
  {
    name: "Marine Mikoyan",
    subject: "Խնդրում եմ ուղարկել գնային առաջարկ ։",
  },
  {
    name: "Seda Mkrtchyan",
    subject: "Մեր կազմակերպությունը ուղղարկում է ձեզ լիքը լիքը նամակներ",
  },
];
function Notifications() {
  return (
    <Admin>
      <div className="admin_content">
        <AdminContentHeader />
        <div className="admin_content_mail">
          <div className="admin_content_mail_sidebar">
            <img src={mailbox} className="admin_content_mail_sidebar_logo"  alt=""  />
            <div className="admin_content_mail_sidebar_dialog-panel">
              {notificationsConfig.map((el, i) => (
                <DialogItem data={el} key={i} />
              ))}
            </div>
          </div>
       
        </div>
      </div>
    </Admin>
  );
}

export default Notifications;

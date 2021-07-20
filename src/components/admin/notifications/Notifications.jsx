import React, { useEffect, useState } from "react";
import Admin from "./../Admin";
import AdminContentHeader from "./../AdminContentHeader";
import mailbox from "../../../assets/images/notification_mailbox.png";
import DialogItem from "./DialogItem";
import NotificationsInner from "./NotificationsInner";
import { getNotificationUsers } from "./../../../js/requests";
import Loading from './../../loading/Loading';
import { isAuthificationPassed } from "../../../js/lib/front-libik";

let notificationsConfigInner = null;

function Notifications( { history  } ) {
  const [notificationsConfig, setnotificationsConfig] = useState(null);
  const [notificationsInnerId, setnotificationsInnerId] = useState(0);
  const [isLoadingOpen, setisLoadingOpen] = useState(false);
  
  useEffect(() => {
    const token = isAuthificationPassed();
    !token && history.push("/");
    setisLoadingOpen(true);
    getNotificationUsers((data) => {
      notificationsConfigInner = data.items;
      setnotificationsConfig(
        data.items.map((el) => ({
          name: el["sender-name"],
          subject: el.content,
        }))
      );
      
      setisLoadingOpen(false);
    });
  }, []);
  return (
    <>
      <Admin>
        <div className="admin_content">
          <AdminContentHeader />
          <div className="admin_content_mail">
            <div className="admin_content_mail_sidebar">
              <img
                src={mailbox}
                className="admin_content_mail_sidebar_logo"
                alt=""
              />
              <div className="admin_content_mail_sidebar_dialog-panel">
                {notificationsConfig &&
                  notificationsConfig.map((el, i) => (
                    <DialogItem
                      changeDialogItem={() => setnotificationsInnerId(i)}
                      data={el}
                      key={i}
                    />
                  ))}
              </div>
            </div>
            {notificationsConfigInner && (
              <NotificationsInner
                data={notificationsConfigInner[notificationsInnerId]}
              />
            )}
          </div>
        </div>
      </Admin>
      {isLoadingOpen && <Loading type="spin" />}
    </>
    
    
  );
}

export default Notifications;

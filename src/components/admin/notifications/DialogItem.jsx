import React from 'react'

export default function DialogItem( { data, changeDialogItem } ) {
    return (
        <div onClick={changeDialogItem} className="admin_content_mail_sidebar_dialog-panel_item">
            <input type="checkbox"  />
            <div className="admin_content_mail_sidebar_dialog-panel_item_name-subject">
                <h2> {data.name}   </h2>
                <p> {data.subject ? data.subject : "No Subject" } </p>
            </div>
        </div>
    )
}
 
import React from 'react'
import ReactDOM  from 'react-dom';
import "./modal.scss";  

export default function Modal( { children } ) {
    return (ReactDOM.createPortal(
        <div className="modal-parent">

            { children }
        </div>
    ,document.getElementById("portal-root")))
}

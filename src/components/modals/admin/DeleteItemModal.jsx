import React from 'react';
import deleteIcon from '../../../assets/images/deleteIcon.png';
import closeIcon from '../../../assets/images/closeIcon.png';

export default function DeleteItemModal( { closeModal } ) {
    return (
        <div className="delete-item-modal modal-content">
            <div className="delete-item-modal_header">
                <div className="heading">
                    <img src={ deleteIcon } alt=""  />
                    <span>Ջնջել</span>
                </div>
                <div>
                    <img src={closeIcon} className="closeIcon" onClick={ closeModal } alt="" />
                </div>
            </div>
            <div className="delete-item-modal_content">
                <p className="delete-item-modal_content_subject">
                  Ցանկանում եք արդյոք ջնջել   
                </p>
            </div>
            <div className="delete-item-modal_confirm">
                <p onClick={ closeModal } >Չեղարկել</p>
                <p>Հաստատել</p>
            </div>
        </div>
    )
}

import React from 'react';
import deleteIcon from '../../../assets/images/deleteIcon.png';
import closeIcon from '../../../assets/images/closeIcon.png';
import { doRequest } from '../../../js/lib/front-libik';   
import { inoToast } from './../../toast/toast';
import { isAuthTokenHasExpired } from './../../../js/lib/front-libik';
import { useHistory } from 'react-router-dom';

export default function DeleteItemModal( { reqParams, closeModal, resetData  } ) { 
    const history = useHistory();
    
    const deleteItem = (   )=>{
          
            doRequest(reqParams)
            .then(( ) => {
                resetData()
                closeModal(  );    
            })
            .catch( err => {
                if(err.noBackend){
                    inoToast.error("Something went wrong");
                    console.log(err);
                  }
                  isAuthTokenHasExpired(err,history);
                  inoToast.error(err) ;
                  
            })
            
    }
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
                <p onClick={ deleteItem }>Հաստատել</p>
            </div> 
        </div>
    )
}

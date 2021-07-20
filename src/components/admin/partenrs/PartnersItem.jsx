/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import partnersDelete from "../../../assets/images/partnersDelete.png";
import { host, requestRoutes } from './../../../js/config';
import { changeModalState } from './../../../js/lib/front-libik';
import Modal from './../../modals/Modal';
import DeleteItemModal from './../../modals/admin/DeleteItemModal';
import { getPartenrsData } from '../../../js/requests';
export default function PartnersItem( { data, updateData } ) {
    
    const [isDeleteItemModalOpen, setisDeleteItemModalOpen] = useState(false);
    const deleteItemReqData = {
      method: "delete",
      url: host + requestRoutes.partners(),
      data: { id: data.id },
      headers: {
        token: localStorage.token,
      },
    };
    const resetData = ()=>{
      getPartenrsData((data)=>{
        updateData(data)
    })
    }
    return (
        <>
        <div className="admin_content_inner_partners_item">
            <img src={data.img}   alt="no image" className="backdropImage" />
            <img src={ partnersDelete } className="deleteIcon"  onClick={() => changeModalState(setisDeleteItemModalOpen)}  alt=""  />
        </div>
        {isDeleteItemModalOpen && (
        <Modal>
          <DeleteItemModal
            resetData={resetData}
            reqParams={deleteItemReqData}
            closeModal={() => changeModalState(setisDeleteItemModalOpen)}
          />
        </Modal>
      )}
    </>
    )
}


import React, { useState, useEffect } from "react";
import Admin from "../Admin";
import AdminContentHeader from "../AdminContentHeader"; 
 
import PartnersItem from "./PartnersItem";
import addIcon from "../../../assets/images/addIcon.svg";
 
import { getPartenrsData } from "../../../js/requests";
import AddElementParters from './../../modals/admin/AddElementParters';
import { changeModalState, isAuthificationPassed } from './../../../js/lib/front-libik';
import Modal from './../../modals/Modal';
import Loading from './../../loading/Loading';

 

export default function Partners( { history } ) {
  const [partnersConfig, setpartnersConfig] = useState();
  const [isAddItemModalOpen, setisAddItemModalOpen] = useState(false);

  const [isLoadingOpen, setisLoadingOpen] = useState(false);

  useEffect(() => {
    const token = isAuthificationPassed();
    !token && history.push("/"); 
    setisLoadingOpen(true)
    getPartenrsData( (data) => {
      setpartnersConfig(data);
      setisLoadingOpen(false)
    } )
 
  }, [ ])
  return (
    <Admin isGalery={ false } >
      <div className="admin_content">
        <AdminContentHeader title="Գործընկերներ" />
        <div className="admin_content_inner admin_content_inner-partners">
          
            <div className="admin_content_inner_add">
              <button onClick={ () => changeModalState(setisAddItemModalOpen) }><img src={addIcon} alt="" /> Ավելացնել </button>
              { isAddItemModalOpen &&
               <Modal>
                  <AddElementParters  closeModal={() => changeModalState(setisAddItemModalOpen)} updateData={ newState => {
                     console.log( newState );
                     setpartnersConfig( newState )
                     }  } />
              </Modal>
               }
            </div>
            <div className="admin_content_inner_partners">
                { partnersConfig && partnersConfig.map( (el, i ) =>  <PartnersItem updateData={ ( newState )=>{ setpartnersConfig(newState) } }  key={i} data={ el }/> )} 
            </div>
        </div>
      </div>
      
      {isLoadingOpen && <Loading type="spin" />}
      
    </Admin>
  );
}

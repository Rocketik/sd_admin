import React, { useState } from "react";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import Modal from "./../../modals/Modal";
import { changeModalState } from './../../../js/lib/front-libik';

export default function TRow({ type, data }) {
  const [isDeleteItemOpen, setisDeleteItemOpen] = useState(false);

  const openDeleteItemModalAndTrtDeleteRow = ( e ) => {
    changeModalState(setisDeleteItemOpen);
  }

  
  return (
    <>
      <tr>
        {data.map((el, i) =>
          type === "head" ? <th key={i}>{el}</th> : <td key={i}>{el}</td>
        )}
        {type !== "head" ? (
          <td>
            <img src={deleteIcon} alt="" onClick={ openDeleteItemModalAndTrtDeleteRow } /> 
          </td>
        ) : (
          ""
        )}
      </tr>
      {isDeleteItemOpen ?
       <Modal>

       </Modal>
        : ""}
    </>
  );
}

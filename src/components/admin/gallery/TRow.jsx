import React, { useState } from "react";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import Modal from "./../../modals/Modal";
import { changeModalState } from "./../../../js/lib/front-libik";
import DeleteItemModal from "./../../modals/admin/DeleteItemModal";

export default function TRow({ type, data }) {
  const [isDeleteItemModalOpen, setisDeleteItemModalOpen] = useState(false);

  const openDeleteItemModalAndTrytDeleteRow = (e) => { 
    changeModalState(setisDeleteItemModalOpen);
  };

  return (
    <>
      <tr>{data.map((el, i) =>
          type === "head" ?<th key={i}>{el}</th> : <td key={i}>{el}</td>
        )}
        {type !== "head" && (<td>
            <img
              className="deleteButton"
              src={deleteIcon}
              alt=""
              onClick={openDeleteItemModalAndTrytDeleteRow}
            />
          </td>)}
      </tr>
      {isDeleteItemModalOpen && (
        <Modal>
          <DeleteItemModal  closeModal={() => changeModalState(setisDeleteItemModalOpen)} />
        </Modal>
      )  }
    </>
  );
}

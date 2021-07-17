import React, { useState } from "react";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import Modal from "./../../modals/Modal";
import { changeModalState } from "./../../../js/lib/front-libik";
import DeleteItemModal from "./../../modals/admin/DeleteItemModal";
import { host, requestRoutes } from "./../../../js/config";

export default function TRow({ type, data }) {
  const [isDeleteItemModalOpen, setisDeleteItemModalOpen] = useState(false);
  const deleteItemReqData = {
    method: "delete",
    url: host + requestRoutes.projects(),
    data: { id: data[0] },
    headers: {
      token: localStorage.token,
    },
  };

  return (
    <>
      <tr>
        {data.map((el, i) =>
          type === "head" ? <th key={i}>{el}</th> : <td key={i}>{el}</td>
        )}
        {type !== "head" && (
          <td>
            <img
              className="deleteButton"
              src={deleteIcon}
              alt=""
              onClick={() => changeModalState(setisDeleteItemModalOpen)}
            />
          </td>
        )}
      </tr>
      {isDeleteItemModalOpen && (
        <Modal>
          <DeleteItemModal
            reqParams={deleteItemReqData}
            closeModal={() => changeModalState(setisDeleteItemModalOpen)}
          />
        </Modal>
      )}
    </>
  );
}

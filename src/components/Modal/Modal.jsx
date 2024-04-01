import "./Modal.scss";
import React, { useState } from "react";

import closeIcon from "../../assets/icons/close-24px.svg"
import CancelButton from "../CancelButton/CancelButton";

export const Modal = ({
  showModal,
  setShowModal,
  showWarehouseModal,
  setShowWarehouseModal,
  showInventoryModal,
  setShowInventoryModal,
  warehouseName,
  inventoryItemName,
}) => {
  const showHideClassName = true ? "modal display-block" : "modal display-none";

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };


  const deleteHandler = () => {
    // include on warehouse/inventory page, pass as prop, delete from list in delete request
  };

  return (
    <>
      {showWarehouseModal && (

        <div className={showHideClassName}>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal-content">
           <div className="content-cont">
              <button className="close-modal" onClick={handleCloseModal}>
                <img src={closeIcon}/>
              </button>
  
              <div className="modal-text">
                <h1>{`Delete ${warehouseName} warehouse?`}</h1>
                <p className="modal-para">{`Please confirm that you’d like to delete ${warehouseName} from the list of warehouses. You won’t be able to undo this action.`}</p>
              </div>
  
              <div className="button-container">
                <button className="cancel-button" onClick={handleCloseModal}>
                  Cancel
                </button>
  
                <button className="delete-button" onClick={deleteHandler}>
                  Delete
                </button>
           </div>
            </div>
          </div>
        </div>
      )}

{showInventoryModal && (
  <div className={showHideClassName}>
    <div className="modal-overlay" onClick={handleCloseModal}></div>
    <div className="modal-content">
      <div className="content-cont">
        <button className="close-modal" onClick={handleCloseModal}>
          <img src={closeIcon}/>
        </button>

        <div className="modal-text">
          <h1>{`Delete ${inventoryItemName} inventory item?`}</h1>
          <p className="modal-para">{`Please confirm that you’d like to delete ${inventoryItemName} from the inventory list. You won’t be able to undo this action.`}</p>
        </div>

        <div className="button-container">
          <button className="cancel-button" onClick={handleCloseModal}>
            Cancel
          </button>

          <button className="delete-button" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Modal;

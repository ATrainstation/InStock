import "./Modal.scss";
import React, { useState } from "react";

import closeIcon from "../../assets/icons/close-24px.svg";
import CancelButton from "../CancelButton/CancelButton";
import axios from "axios";

export const Modal = ({
  showModal,
  setShowModal,
  showWarehouseModal,
  setShowWarehouseModal,
  showInventoryModal,
  setShowInventoryModal,
  warehouseName,
  inventoryItemName,
  passedInfo,
}) => {
  const showHideClassName = true ? "modal display-block" : "modal display-none";

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  const deleteHandler = async () => {
    try {
      const deleteWarehouse = await axios.delete(
        `http://localhost:5050/api/warehouses/${passedInfo.id}`
      );
      alert('Warehouse deleted successfully!');

    } catch (error) {
      console.log(error);
    }
    setShowModal(!showModal);
  };

  const deleteInventoryHandler = async () => {
    try {
      const deleteInventory = await axios.delete(
        `http://localhost:5050/api/inventories/${passedInfo.id}`
        );
        alert('Inventory Item deleted successfully!');
        
    } catch (error) {
      console.log(error);
    }
    setShowModal(!showModal);
  };

  return (
    <>
      {showWarehouseModal && (
        <div className={showHideClassName}>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <div className="content-cont">
              <button className="close-modal" onClick={handleCloseModal}>
                <img src={closeIcon} />
              </button>

              <div className="modal-text">
                <h1>{`Delete ${passedInfo.name} warehouse?`}</h1>
                <p className="modal-para">{`Please confirm that you’d like to delete ${passedInfo.name} from the list of warehouses. You won’t be able to undo this action.`}</p>
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
                <img src={closeIcon} />
              </button>

              <div className="modal-text">
                <h1>{`Delete ${passedInfo.name} inventory item?`}</h1>
                <p className="modal-para">{`Please confirm that you’d like to delete ${passedInfo.name} from the inventory list. You won’t be able to undo this action.`}</p>
              </div>

              <div className="button-container">
                <button className="cancel-button" onClick={handleCloseModal}>
                  Cancel
                </button>

                <button className="delete-button" onClick={deleteInventoryHandler}>
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

import "./Modal.scss";
import React, { useState } from "react";


export const Modal = ({
  showModal,
  setShowModal,
  showWarehouseModal,
  setShowWarehouseModal,
  showInventoryModal,
  setShowInventoryModal,
  warehouseName,
  inventoryItemName
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
        <div className="modal-overlay"></div>
        <div className="modal-content">
        
          <h2>{`Delete ${warehouseName} warehouse?`}</h2>
          <p>{`Please confirm that you’d like to delete ${warehouseName} from the list of warehouses. You won’t be able to undo this action.`}</p>
         
          <button className="cancel-button" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="delete-button" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      )}

    {showInventoryModal && (
      <div className={showHideClassName}>
        <div className="modal-overlay"></div>
        <div className="modal-content">
        
          <h2>{`Delete ${inventoryItemName} inventory item?`}</h2>
          <p>{`Please confirm that you’d like to delete ${inventoryItemName} from the inventory list. You won’t be able to undo this action.`}</p>
         
          <button className="cancel-button" onClick={handleCloseModal}>
            Cancel
          </button>

          <button className="delete-button" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      )}
      
</>
  );
};

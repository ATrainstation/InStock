import React, { useState } from "react";
import Modal  from "../Modal/Modal";


export default function WareHouseItem() {
  const [showModal, setShowModal] = useState(false);
  const [showWarehouseModal, setShowWarehouseModal] = useState(false);
  const [showInventoryModal, setShowInventoryModal] = useState(false);

  const warehouseName = "TEMP Washington";
  const inventoryItemName = "TEMP Washington";

  const deleteHandler = () => {
    setShowModal(true),
    setShowWarehouseModal(true)
  };

  return (<> 
  {showModal && (
  
    <Modal 
    showModal={showModal}
    setShowModal={setShowModal}
    showWarehouseModal={showWarehouseModal}
    setShowWarehouseModal={setShowWarehouseModal}
    showInventoryModal={showInventoryModal}
    setShowInventoryModal={setShowInventoryModal}
    warehouseName={warehouseName}
    inventoryItemName={inventoryItemName}
    />
  )}
  
  <div>
    
   {/* Temp delete button */}
    <button onClick={deleteHandler}>DELETE</button>
  </div>
 </>
  )
}
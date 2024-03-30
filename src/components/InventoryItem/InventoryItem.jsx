import React, { useState } from "react";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import IsInStock from "../IsInStock/IsInStock";
import "./InventoryItem.scss";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

import HeaderArrow from "../../assets/icons/chevron_right-24px.svg";

export default function inventoryItem() {
  const testData = [
    {
      item: "Television",
      category: "Electronics",
      isInStock: true,
      qty: "500",
      inventory: "Washington",
    },
    { item: 1 ,  category: 2, isInStock: 3, qty: 4, warehouse: 5},
    { item: 1 ,  category: 2, isInStock: 3, qty: 4, warehouse: 5},
    { item: 1 ,  category: 2, isInStock: 3, qty: 4, warehouse: 5},
    { item: 1 ,  category: 2, isInStock: 3, qty: 4, warehouse: 5},
    { item: 1 ,  category: 2, isInStock: 3, qty: 4, warehouse: 5},
    { item: 1 ,  category: 2, isInStock: 3, qty: 4, warehouse: 5},
  ];

  const [showModal, setShowModal] = useState(false);
  const [showinventoryModal, setShowinventoryModal] = useState(false);
  const [showInventoryModal, setShowInventoryModal] = useState(false);

  const inventoryName = "TEMP Washington";
  const inventoryItemName = "TEMP Washington";

  const deleteHandler = () => {
    setShowModal(true), setShowinventoryModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          showinventoryModal={showinventoryModal}
          setShowinventoryModal={setShowinventoryModal}
          showInventoryModal={showInventoryModal}
          setShowInventoryModal={setShowInventoryModal}
          inventoryName={inventoryName}
          inventoryItemName={inventoryItemName}
        />
      )}

      <div className="invent-container">
        {testData.map((item) => (
          <div className="inventory-row">
            <div className="inventory-item inventory-item-item">
              <p className="inventory-item__header">ITEM</p>
              <Link className="inventory-linkDetails" to={`/warehouse/asda`}>
              <div className="inventory-link">
                <button className="inventory-item__inventory">{item.item}</button>
                <img src={HeaderArrow} alt="header arrow" />
              </div>
              </Link>
            </div>
            <div className="inventory-item inventory-item-category">
              <p className="inventory-item__header">CATEGORY</p>
              <p className="inventory-item__name">{item.category}</p>
            </div>
            <div className="inventory-item inventory-item-status">
              <p className="inventory-item__header">STATUS</p>
              <p className="inventory-item__address"><IsInStock isInStock={item.isInStock}/></p>
            </div>
            <div className="inventory-item inventory-item-quantity">
              <p className="inventory-item__header">QTY</p>
              <p className="inventory-item__qty">{item.qty}</p>
            </div>
            <div className="inventory-item inventory-item-warehouse">
              <p className="inventory-item__header">WAREHOUSE</p>
              <p className="inventory-item__warehouse">{item.inventory}</p>
            </div>
            <div className="inventory-actions inventory-item-actions">
              <button className="inventory-actions__delete">
                <Link onClick={deleteHandler}><img src={Delete} alt="delete icon" /></Link>
              </button>
              <button className="inventory-actions__edit">
                <img src={Edit} alt="edit icon" />
              </button>
            </div>
          </div>
        ))}
        {/* Temp delete button */}
        {/* <button onClick={deleteHandler}>DELETE</button> */}
        </div>
    </>
  );
}

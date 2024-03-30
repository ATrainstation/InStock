// import "../Modal/Modal.scss"
import "./InventoryItem.scss";
import "../../styles/partials/_transitions.scss";
import Modal from "../Modal/Modal";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import IsInStock from "../IsInStock/IsInStock";
import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
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
  const [showInventoryModal, setShowInventoryModal] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const inventoryItemName = "TEMP Washington";

  const deleteHandler = () => {
    setShowModal(true), setShowInventoryModal(true);
  };

  return (
    <>
    <CSSTransition
in={showModal}
timeout={200}
classNames="fade"
unmountOnExit
>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          showInventoryModal={showInventoryModal}
          setShowInventoryModal={setShowInventoryModal}
          inventoryItemName={inventoryItemName}
        />
      </CSSTransition>

      <div className="invent-container">
        {testData.map((item) => (
          <div className="inventory-row">
            <div className="inventory-item inventory-item-item">
              <p className="inventory-item__header">INVENTORY ITEM</p>
              <Link className="inventory-linkDetails" to={`/warehouse/:id/inventory/:id`}>
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

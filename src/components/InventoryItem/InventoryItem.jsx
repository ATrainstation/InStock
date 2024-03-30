import React, { useState } from "react";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import IsInStock from "../IsInStock/IsInStock";
import "./InventoryItem.scss";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

import HeaderArrow from "../../assets/icons/chevron_right-24px.svg";

export default function WareHouseItem() {
  const testData = [
    {
      item: "Television",
      category: "Electronics",
      isInStock: true,
      qty: "500",
      warehouse: "Washington",
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

  const inventoryItemName = "TEMP Washington";

  const deleteHandler = () => {
    setShowModal(true), setShowInventoryModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          showInventoryModal={showInventoryModal}
          setShowInventoryModal={setShowInventoryModal}
          inventoryItemName={inventoryItemName}
        />
      )}

      <div>
        {testData.map((item) => (
          <div className="row">
            <div className="item">
              <p className="item__header">ITEM</p>
              <Link className="linkDetails" to={`/warehouse/:id/inventory/:id`}>
              <div className="warehouse-link">
                <button className="item__warehouse">{item.item}</button>
                <img src={HeaderArrow} alt="header arrow" />
              </div>
              </Link>

            </div>
            <div className="item">
              <p className="item__header">CATEGORY</p>
              <p className="item__name">{item.category}</p>
            </div>
            <div className="item">
              <p className="item__header">STATUS</p>
              <IsInStock isInStock={item.isInStock}/>
            </div>
            <div className="item item-contact">
              <p className="item__header">QTY</p>
              <p className="item__email">{item.qty}</p>
            </div>
            <div className="item item-contact">
              <p className="item__header">WAREHOUSE</p>
              <p className="item__email">{item.warehouse}</p>
            </div>
            <div className="actions">
              <button className="actions__delete">
                <Link onClick={deleteHandler}><img src={Delete} alt="delete icon" /></Link>
              </button>
              <button className="actions__edit">
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

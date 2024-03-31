import "../Modal/Modal.scss";
import "./WareHouseDetailsItem.scss";
import "../../styles/partials/_transitions.scss";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import Modal from "../Modal/Modal";

import IsInStock from "../IsInStock/IsInStock";
import HeaderArrow from "../../assets/icons/chevron_right-24px.svg";

export default function WareHouseItem({ handleEdit }) {
  const testData = [
    {
      warehouse: "Television",
      contact: "in stock",
      address: "Electronics",
      info: "647",
    },
    { warehouse: 1, contact: 2, address: 3, info: 4 },
    { warehouse: 1, contact: 2, address: 3, info: 4 },
    { warehouse: 1, contact: 2, address: 3, info: 4 },
    { warehouse: 1, contact: 2, address: 3, info: 4 },
    { warehouse: 1, contact: 2, address: 3, info: 4 },
    { warehouse: 1, contact: 2, address: 3, info: 4 },
  ];

  const [showModal, setShowModal] = useState(false);
  const [showWarehouseModal, setShowWarehouseModal] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const warehouseName = "TEMP Washington";

  const deleteHandler = () => {
    setShowModal(true), setShowWarehouseModal(true);
  };

  return (
    <>
      <CSSTransition
        in={showModal}
        timeout={250}
        classNames="fade"
        unmountOnExit
      >
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          showWarehouseModal={showWarehouseModal}
          setShowWarehouseModal={setShowWarehouseModal}
          warehouseName={warehouseName}
        />
      </CSSTransition>

      <div className="details-warehouse-container">
        {testData.map((item) => (
          <div className="details-row">
            <div className="details-item details-item-item">
              <p className="details-item__header">INVENTORY ITEM</p>
              <Link className="details-linkDetails" to={`/warehouse/asda`}>
                <div className="details-warehouse-link">
                  <button className="details-item__item">
                    {item.warehouse}
                  </button>
                  <img src={HeaderArrow} alt="header arrow" />
                </div>
              </Link>
            </div>
            <div className="details-item details-item-status">
              <p className="details-item__header">STATUS</p>
              <p className="details-item__status">
                <IsInStock isInStock={true} />
              </p>
            </div>
            <div className="details-item details-item-category">
              <p className="details-item__header">CATEGORY</p>
              <p className="details-item__category">{item.address}</p>
            </div>
            <div className="details-item details-item-qty">
              <p className="details-item__header">QTY</p>
              <p className="details-item__qty">{item.info}</p>
            </div>
            <div className="details-actions-container details-item-actions">
              <div className="details-actions">
                <button className="details-actions__delete">
                  <Link onClick={deleteHandler}>
                    <img src={Delete} alt="delete icon" />
                  </Link>
                </button>
                <button className="details-actions__edit">
                  <img src={Edit} alt="edit icon" onClick={handleEdit} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Temp delete button */}
        {/* <button onClick={deleteHandler}>DELETE</button> */}
      </div>
    </>
  );
}

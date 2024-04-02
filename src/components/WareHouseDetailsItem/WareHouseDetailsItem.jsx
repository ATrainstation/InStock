import "../Modal/Modal.scss";
import "./WareHouseDetailsItem.scss";
import "../../styles/partials/_transitions.scss";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link, useParams } from "react-router-dom";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import Modal from "../Modal/Modal";
import axios from "axios";
import IsInStock from "../IsInStock/IsInStock";
import HeaderArrow from "../../assets/icons/chevron_right-24px.svg";

export default function WareHouseItem() {
  const params = useParams();

  const [showModal, setShowModal] = useState(false);
  const [showInventoryModal, setShowInventoryModal] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [inventories, setInventories] = useState([]);
  const [passedInfo, setPassedInfo] = useState({});
  const warehouseName = "TEMP Washington";

  const deleteHandler = (id, name) => {
    setShowModal(true);
    setShowInventoryModal(true);
    setPassedInfo({ id: id, name: name });
  };

  useEffect(() => {
    const fetchWarehouseInventories = async () => {
      try {
        const getWarehouseInventories = await axios.get(
          `http://localhost:5050/api/warehouses/${params.id}/inventories`
        );
        setInventories(getWarehouseInventories.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWarehouseInventories();
  }, [showModal]);

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
          showInventoryModal={showInventoryModal}
          setShowInventoryModal={setShowInventoryModal}
          passedInfo={passedInfo}
        />
      </CSSTransition>

      <div className="details-warehouse-container">
        {inventories.map((item) => (
          <div className="details-row" key={item.id}>
            <div className="details-item details-item-item">
              <p className="details-item__header">INVENTORY ITEM</p>
              <Link
                className="details-linkDetails"
                to={`/warehouse/${params.id}/inventory/${item.id}`}
              >
                <div className="details-warehouse-link">
                  <button className="details-item__item">
                    {item.item_name}
                  </button>
                  <img src={HeaderArrow} alt="header arrow" />
                </div>
              </Link>
            </div>
            <div className="details-item details-item-status">
              <p className="details-item__header">STATUS</p>
              <div className="details-item__status">
                <IsInStock isInStock={item.status} />
              </div>
            </div>
            <div className="details-item details-item-category">
              <p className="details-item__header">CATEGORY</p>
              <p className="details-item__category">{item.category}</p>
            </div>
            <div className="details-item details-item-qty">
              <p className="details-item__header">QTY</p>
              <p className="details-item__qty">{item.quantity}</p>
            </div>
            <div className="details-actions-container details-item-actions">
              <div className="details-actions">
                <button
                  onClick={() => {
                    deleteHandler(item.id, item.item_name);
                  }}
                  className="details-actions__delete"
                >
                  <img src={Delete} alt="delete icon" />
                </button>
                <Link
                  to={`/inventory/${item.id}/edit`}
                  className="details-actions__edit"
                >
                  <img src={Edit} alt="edit icon" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

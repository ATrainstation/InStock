import "../Modal/Modal.scss";
import "./InventoryItem.scss";
import "../../styles/partials/_transitions.scss";
import Modal from "../Modal/Modal";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import IsInStock from "../IsInStock/IsInStock";
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";

import HeaderArrow from "../../assets/icons/chevron_right-24px.svg";

export default function InventoryItem() {
  const [inventory, setInventory] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [showInventoryModal, setShowInventoryModal] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [passedInfo, setPassedInfo] = useState({});

  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const getInventory = await axios.get(
          "http://localhost:5050/api/inventories"
        );
        setInventory(getInventory.data);
      } catch (error) {
        alert(error);
      }
    };
    fetchInventoryData();

    axios
      .get("http://localhost:5050/api/warehouses")
      .then((response) => {
        const warehouseMap = {};
        response.data.forEach((warehouse) => {
          warehouseMap[warehouse.id] = warehouse.warehouse_name;
        });
        setWarehouses(warehouseMap);
      })
      .catch((error) => {
        console.error("Error fetching warehouses", error);
      });
  }, [showModal]);

  const deleteHandler = (id, name) => {
    setShowModal(true), setShowInventoryModal(true);
    setPassedInfo({ id: id, name: name });
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
          passedInfo={passedInfo}
        />
      </CSSTransition>

      <div className="invent-container">
        {inventory.map((item) => (
          <div key={item.id} className="inventory-row">
            <div className="inventory-item inventory-item-item">
              <p className="inventory-item__header">INVENTORY ITEM</p>
              <Link
                className="inventory-linkDetails"
                to={`/warehouse/${item.warehouse_id}/inventory/${item.id}`}
              >
                <div className="inventory-link">
                  <button className="inventory-item__inventory">
                    {item.item_name}
                  </button>
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
                <IsInStock isInStock={item.status} />
            </div>
            <div className="inventory-item inventory-item-quantity">
              <p className="inventory-item__header">QTY</p>
              <p className="inventory-item__qty">{item.quantity}</p>
            </div>
            <div className="inventory-item inventory-item-warehouse">
              <p className="inventory-item__header">WAREHOUSE</p>
              <p className="inventory-item__warehouse">
                {warehouses[item.warehouse_id]}
              </p>
            </div>

            <div className="inventory-actions inventory-item-actions">
              <button
                onClick={() => {
                  deleteHandler(item.id, item.item_name);
                }}
                className="inventory-actions__delete"
              >
                <img src={Delete} alt="delete icon" />
              </button>
              <Link
                className="inventory-actions__edit"
                to={`/inventory/${item.id}/edit`}
              >
                <img src={Edit} alt="edit icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

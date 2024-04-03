import "./WarehouseDetails.scss";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import Button from "../Button/Button";
import { Link, useParams } from "react-router-dom";
import WarehouseDetailsItem from "../WareHouseDetailsItem/WareHouseDetailsItem";
import HeaderChevron from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WarehouseDetails() {
  const params = useParams();
  const [warehouse, setWarehouse] = useState([]);

  useEffect(() => {
    const fetchWarehouseDetails = async () => {
      try {
        const getWarehouse = await axios.get(
          `http://localhost:5050/api/warehouses/${params.id}`
        );
        setWarehouse(getWarehouse.data);
      } catch (error) {
        alert(error);
      }
    };
    fetchWarehouseDetails();
  }, []);

  return (
    <div className="WarehouseDetails-container">
      <div className="WarehouseDetails">
        <div className="details-header">
          <div className="details-title">
            <Link to="/" className="details-title__back">
              <img src={BackIcon} alt="back icon" />
            </Link>
            <h1 className="details-title__title">{warehouse.warehouse_name}</h1>
          </div>
          <Link to={`/warehouse/${warehouse.id}/edit`}>
            <Button buttonText="Edit" classname="edit-button" />
          </Link>
        </div>
        <div className="details-body">
          <div className="details-body-container1">
            <div className="body-address">
              <p className="body__header">WAREHOUSE ADDRESS:</p>
              <div className="body__text--wrapper">
                <p className="body__text body__text-descript">
                  {warehouse.address},{" "}
                </p>
                <div className="body__text-city-country--wrapper">
                  <p className="body__text body__text-descript">
                    {warehouse.city},{" "}
                  </p>
                  <p className="body__text body__text-descript">
                    {warehouse.country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="details-body-container2">
            <div className="body-contact-info">
              <div className="body-contact body-contact-name">
                <p className="body__header">CONTACT NAME:</p>
                <p className="body__text">{warehouse.contact_name}</p>
              </div>
              <div className="body-contact body-contact-email">
                <p className="body__header">CONTACT INFORMATION:</p>
                <p className="body__text">{warehouse.contact_phone}</p>
                <p className="body__text">{warehouse.contact_email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="warehouse-details-list">
          <span className="details-item-container details-item-container-item">
            <p>INVENTORY ITEM</p>
            <img
              className="details-item-container details-item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="details-item-container details-item-container-status">
            <p>CATEGORY</p>
            <img
              className="details-item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="details-item-container details-item-container-category">
            <p>STATUS</p>
            <img
              className="details-item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="details-item-container details-item-container-quantity">
            <p>QUANTITY</p>
            <img
              className="details-item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="details-item-container-actions">
            <p className="details-warehouse-list__last">ACTIONS</p>
          </span>
        </div>
        <WarehouseDetailsItem className="details-warehouse-rows" />
      </div>
    </div>
  );
}

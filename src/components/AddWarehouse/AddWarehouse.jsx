import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import React, { useState } from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import "./AddWarehouse.scss";

function AddWarehouse() {
  const [formData, setFormData] = useState({
    warehouseName: "",
    streetAddress: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-warehouses-container">
      <div className="component-container">
        <div className="component-header">
          <div className="header__content">
            <img className="arrow-icon" src={backArrow} />
            <h1 className="component-header__title">Add New Warehouse</h1>
          </div>
        </div>

        <div className="add-warehouse__form__container">
          <form>
            <div className="Warehouse Details">
              <h2>Warehouse Details</h2>

              <label className="input-title">
                Warehouse Name
                <input className="input-box" placeholder="Warehouse Name" />
              </label>

              <label className="input-title">
                Street Address
                <input className="input-box" placeholder="Street Address" />
              </label>

              <label className="input-title">
                City
                <input className="input-box" placeholder="City" />
              </label>

              <label className="input-title">
                Country
                <input className="input-box" placeholder="Country" />
              </label>
            </div>

            <div className="contact-details">
              <h2>Contact Details</h2>

              <label className="input-title">
                Contact Name
                <input className="input-box" placeholder="Contact Name" />
              </label>

              <label className="input-title">
                Position
                <input className="input-box" placeholder="Position" />
              </label>

              <label className="input-title">
                Phone Number
                <input className="input-box" placeholder="Phone Number" />
              </label>

              <label className="input-title">
                Email
                <input className="input-box" placeholder="Email" />
              </label>
            </div>


          </form>

        </div>

        <div className="buttons">
              <button>Cancel</button>
              <Button />
              <button>+ Add Warehouse</button>
        </div>
        
        </div>
    </div>
  );
}

export default AddWarehouse;

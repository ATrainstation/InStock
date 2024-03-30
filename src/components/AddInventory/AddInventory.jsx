import Button from "../Button/Button";
import React, { useState } from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import "./AddInventory.scss";
import CancelButton from "../CancelButton/CancelButton";

function AddInventory() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    category: "",
    isAvailable: true,
    quantity: 0,
    Warehouse: "",
  });

  const [formValidation, setFormValidation] = useState({
    itemName: true,
    description: true,
    category: true,
    warehouse: true,
  });

  const handleBackClick = (e) => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormValidation({ ...formValidation, [e.target.name]: true });
  };

  const handleCancel = (id) => {
    navigate(`/#`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newValidation = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        isValid = false;
        newValidation[key] = false;
      } else {
        newValidation[key] = true;
      }
    });

    setFormValidation(newValidation);
    setFormSubmitted(true);

    if (isValid) {
      console.log("Form is valid. Submitting data...", formData);
      navigate("/");
    } else {
      console.log("Form is invalid. Please fill in all fields.");
    }
  };

  const getInputClass = (name) => {
    if (!formValidation[name]) {
      return "input-box input-error";
    }
    return "input-box";
  };

  return (
    <div className="add-inventory-container">
      <div className="component-container">
        <div className="component-header">
          <div className="header__content">
            <img
              className="arrow-icon"
              src={backArrow}
              alt="Back"
              onClick={handleBackClick}
            />
            <h1 className="component-header__title">Add New Inventory Item</h1>
          </div>
        </div>

        <div className="add-inventory__form__container">
          <form className="add-inventory__form">
            <div className="inventory-details">
              <h2>Item Details</h2>

              <label className="input-title">
                Item Name
                <input
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  className={getInputClass("itemName")}
                  placeholder="Item Name"
                />
              </label>

              <label className="input-title">
                Description
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="input-textarea"
                  placeholder="Please enter a brief item description..."
                />
              </label>

              <label className="input-title">
                Category
                <select name="warehouse" id="warehouse" className="input-dropdown">
                  <option value="Electronics">Electronics</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                </select>
              </label>
            </div>

            <div className="item-availability">
              <h2>Item Availability</h2>

              <label className="input-title">
                Status
                <div className="input-radio">
                <label className="input-radio__container">
                  <input
                    type="radio"
                    name="availability"
                    value="true"
                    onChange={handleChange}
                    className={getInputClass("contactName")}
                    checked
                  />
                  In Stock</label>
                  <label className="input-radio__container">
                  <input
                    type="radio"
                    name="availability"
                    value="false"
                    onChange={handleChange}
                    className={getInputClass("contactName")}
                  />
                  Out of Stock</label>
                </div>
              </label>

              {formData.isAvailable === true ? (<label className="input-title">
                Quantity
                <input
                  name="position"
                  type="number"
                  value={formData.position}
                  onChange={handleChange}
                  className="input-qty"
                  placeholder="Quantity"
                />
              </label>):(<></>)}
              

              <label className="input-title">
                Warehouse
                <select name="warehouse" id="warehouse" className="input-dropdown">
                  <option value="Washington">Wahsington</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                </select>
              </label>
            </div>
          </form>
        </div>

        <div className="buttons__container">
          <div className="buttons">
            <CancelButton classname="cancel-button-sizes" link={handleCancel} />
            <Button
              classname="header-interactive__add add-button-sizes"
              buttonText="+ Add Inventory"
              link={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddInventory;

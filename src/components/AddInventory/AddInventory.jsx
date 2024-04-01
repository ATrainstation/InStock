import Button from "../Button/Button";
import React, { useState } from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import "./AddInventory.scss";
import CancelButton from "../CancelButton/CancelButton";
import axios from "axios";

function AddInventory() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "true",
    quantity: "0",
    warehouse: "",
  });

  const [formValidation, setFormValidation] = useState({
    item_name: true,
    description: true,
    category: true,
    warehouse: true,
    quantity: true,
  });

  const handleBackClick = (e) => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormValidation({ ...formValidation, [e.target.name]: true });
    console.log(`${e.target.name}:${e.target.value}`);
  };

  const handleCancel = (id) => {
    navigate(`/#`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let isValid = true;
    const newValidation = {};
    console.log(formData);

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
      try {

        const response = await axios.post('http://localhost:5050/api/inventories', formData);
  
    
        console.log(response.data);
        alert('Inventory added successfully!');
        navigate('/'); 
      } catch (error) {
        console.error("Failed to add inventory:", error.response ? error.response.data : error);
        alert((error.response && error.response.data.message) || 'Failed to add inventory.');
      }
    } else {
      console.log("Form is invalid. Please fill in all fields.");
    }
  };

  const getInputClass = (name) => {
    if (!formValidation[name]) {
      return "input-error";
    }
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
                  name="item_name"
                  value={formData.itemName}
                  onChange={handleChange}
                  className={`input-box ${getInputClass("item_name")}`}
                  placeholder="Item Name"
                />
              </label>

              <label className="input-title">
                Description
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`input-textarea ${getInputClass("description")}`}
                  placeholder="Please enter a brief item description..."
                />
              </label>

              <label className="input-title">
                Category
                <select
                  name="category"
                  id="category"
                  className={`input-dropdown ${getInputClass("category")}`}
                  onChange={handleChange}
                >
                  <option value="">Choose Category</option>
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
                      name="status"
                      value="true"
                      onChange={handleChange}
                      checked={formData.status === "true"}
                    />
                    In Stock
                  </label>
                  <label className="input-radio__container">
                    <input
                      type="radio"
                      name="status"
                      value="false"
                      onChange={handleChange}
                      checked={formData.status === "false"}
                    />
                    Out of Stock
                  </label>
                </div>
              </label>

              {formData.status === "true" ? (
                <label className="input-title">
                  Quantity
                  <input
                    name="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={handleChange}
                    className={`input-qty ${getInputClass("quantity")}`}
                    placeholder="Quantity"
                  />
                </label>
              ) : (
                <></>
              )}

              <label className="input-title">
                Warehouse
                <select
                  name="warehouse"
                  id="warehouse"
                  className={`input-dropdown ${getInputClass("warehouse")}`}
                  onChange={handleChange}
                >
                  <option value="">Choose Warehouse</option>
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

import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import React, { useState } from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from 'react-router-dom';
import "./AddWarehouse.scss";
import CancelButton from "../CancelButton/CancelButton";

function AddWarehouse() {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const [formValidation, setFormValidation] = useState({
    warehouseName: true,
    streetAddress: true,
    city: true,
    country: true,
    contactName: true,
    position: true,
    phoneNumber: true,
    email: true,
  });


  const handleBackClick = (e) => {
    navigate(-1);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormValidation({ ...formValidation, [e.target.name]: true });
  };

  const handleCancel = (id) => {
    navigate(`/#`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    let isValid = true;
    const newValidation = {};

    Object.keys(formData).forEach(key => {
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
      navigate('/');
    } else {
      console.log("Form is invalid. Please fill in all fields.");
    }
  };

  const getInputClass = (name) => {
    if (!formValidation[name]) {
      return 'input-box input-error'; 
    }
    return 'input-box';
  };

  // CHANGE THE CLASSNAMES
  return (
    <div className="add-warehouses-container">
      <div className="component-container">
        <div className="component-header">
          <div className="header__content">
            <img className="arrow-icon" src={backArrow} alt="Back"
              onClick={handleBackClick} />
            <h1 className="component-header__title">Add New Warehouse</h1>
          </div>
        </div>

        <div className="add-warehouse__form__container">
          <form className="add-warehouse__form">
            <div className="warehouse-details">
              <h2>Warehouse Details</h2>

              <label className="input-title">Warehouse Name
              <input
                name="warehouseName"
                value={formData.warehouseName}
                onChange={handleChange}
                className={getInputClass('warehouseName')}
                placeholder="Warehouse Name"
              />
            </label>

            <label className="input-title">Street Address
              <input
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className={getInputClass('streetAddress')}
                placeholder="Street Address"
              />
            </label>

            <label className="input-title">City
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={getInputClass('city')}
                placeholder="City"
              />
            </label>

            <label className="input-title">Country
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={getInputClass('country')}
                placeholder="Country"
              />
            </label>
          </div>

          <div className="contact-details">
            <h2>Contact Details</h2>

            <label className="input-title">Contact Name
              <input
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className={getInputClass('contactName')}
                placeholder="Contact Name"
              />
            </label>

            <label className="input-title">Position
              <input
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={getInputClass('position')}
                placeholder="Position"
              />
            </label>

            <label className="input-title">Phone Number
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={getInputClass('phoneNumber')}
                placeholder="Phone Number"
              />
            </label>

            <label className="input-title">Email
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={getInputClass('email')}
                placeholder="Email"
              />
            </label>
            </div>


          </form>

        </div>

<div className="buttons__container">
          <div className="buttons">
                <CancelButton classname="cancel-button-sizes" link={handleCancel} />
                <Button
                  classname="header-interactive__add add-button-sizes"
                  buttonText="+ Add Warehouse"
                  link={handleSubmit}
                />
          </div>
</div>
        
        </div>
    </div>
  );
}

export default AddWarehouse;

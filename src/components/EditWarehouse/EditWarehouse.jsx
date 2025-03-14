import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import axios from "axios";
import React, { useState, useEffect } from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate, useParams } from "react-router-dom";
import "./EditWarehouse.scss";
import CancelButton from "../CancelButton/CancelButton";

function EditWarehouse() {
  const params = useParams();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [warehouse, setWarehouse] = useState([]);

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

  useEffect(() => {
    const fetchWarehouseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/api/warehouses/${params.id}`
        );
        const warehouseData = response.data;
        setWarehouse(warehouseData);

        setFormData({
          warehouseName: warehouseData.warehouse_name,
          streetAddress: warehouseData.address,
          city: warehouseData.city,
          country: warehouseData.country,
          contactName: warehouseData.contact_name,
          position: warehouseData.contact_position,
          phoneNumber: warehouseData.contact_phone,
          email: warehouseData.contact_email,
        });
      } catch (error) {
        alert(error);
      }
    };
    fetchWarehouseDetails();
  }, []);

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
  };

  function formatPhoneNumber(value, previousValue) {
    let numbers = "";
    for (let i = 0; i < value.length; i++) {
      if (value[i] >= "0" && value[i] <= "9") {
        numbers += value[i];
      }
    }
    if (numbers.startsWith("1")) {
      numbers = numbers.substring(1);
    }
    numbers = numbers.slice(0, 10);
    if (previousValue && value.length < previousValue.length) {
      const diffs = previousValue.length - value.length;
      const isDeletingSpecialChar =
        [14, 9, 5].includes(previousValue.length) && diffs === 1;
      if (isDeletingSpecialChar) {
        numbers = numbers.slice(0, numbers.length - 1);
      }
    }

    let formattedNumber = numbers;

    if (numbers.length > 6) {
      formattedNumber = `+1 (${numbers.slice(0, 3)}) ${numbers.slice(
        3,
        6
      )}-${numbers.slice(6)}`;
    } else if (numbers.length > 3) {
      formattedNumber = `+1 (${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    } else if (numbers.length > 0) {
      formattedNumber = `+1 (${numbers}`;
    } else {
      formattedNumber = "+1 ";
    }

    return formattedNumber;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      const formattedValue = formatPhoneNumber(value);
      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setFormValidation({ ...formValidation, [name]: true });
  };

  const handleCancel = (id) => {
    navigate(`/`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e) => {
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
      try {
        const newWarehouse = {
          warehouse_name: formData.warehouseName,
          address: formData.streetAddress,
          city: formData.city,
          country: formData.country,
          contact_name: formData.contactName,
          contact_position: formData.position,
          contact_phone: formData.phoneNumber,
          contact_email: formData.email,
        };

        const response = await axios.put(
          `http://localhost:5050/api/warehouses/${params.id}`,
          newWarehouse
        );

        alert("Warehouse edited successfully!");
        navigate("/");
      } catch (error) {
        alert(
          "Failed to edit warehouse:",
          error.response ? error.response.data : error
        );
        alert(
          (error.response && error.response.data.message) ||
            "Failed to edit warehouse."
        );
      }
    } else {
      alert("Form is invalid. Please fill in all fields.");
    }
  };

  const getInputClass = (name) => {
    if (!formValidation[name]) {
      return "input-box input-error";
    }

    return "input-box";
  };

  return (
    <div className="add-warehouses-container">
      <div className="component-container">
        <div className="component-header">
          <div className="header__content">
            <img
              className="arrow-icon"
              src={backArrow}
              alt="Back"
              onClick={handleBackClick}
            />
            <h1 className="component-header__title">Edit Warehouse</h1>
          </div>
        </div>

        <div className="add-warehouse__form__container">
          <form className="add-warehouse__form">
            <div className="warehouse-details">
              <h2>Warehouse Details</h2>

              <label className="input-title">
                Warehouse Name
                <input
                  name="warehouseName"
                  value={formData.warehouseName}
                  onChange={handleChange}
                  className={getInputClass("warehouseName")}
                  placeholder={`${warehouse.warehouse_name}`}
                />
              </label>

              <label className="input-title">
                Street Address
                <input
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className={getInputClass("streetAddress")}
                  placeholder={`${warehouse.address}`}
                />
              </label>

              <label className="input-title">
                City
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={getInputClass("city")}
                  placeholder={`${warehouse.city}`}
                />
              </label>

              <label className="input-title">
                Country
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={getInputClass("country")}
                  placeholder={`${warehouse.country}`}
                />
              </label>
            </div>

            <div className="contact-details">
              <h2>Contact Details</h2>

              <label className="input-title">
                Contact Name
                <input
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className={getInputClass("contactName")}
                  placeholder={`${warehouse.contact_name}`}
                />
              </label>

              <label className="input-title">
                Position
                <input
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className={getInputClass("position")}
                  placeholder={`${warehouse.contact_position}`}
                />
              </label>

              <label className="input-title">
                Phone Number
                <input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={getInputClass("phoneNumber")}
                  placeholder={`${warehouse.contact_phone}`}
                />
              </label>

              <label className="input-title">
                Email
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClass("email")}
                  placeholder={`${warehouse.contact_email}`}
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
              buttonText="Save"
              link={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditWarehouse;

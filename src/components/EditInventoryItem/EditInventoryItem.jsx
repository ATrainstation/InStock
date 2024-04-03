import Button from "../Button/Button";
import React, { useEffect, useState } from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import "./EditInventoryItem.scss";
import CancelButton from "../CancelButton/CancelButton";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditInventory() {
  const params = useParams();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inventoryItem, setInventoryItem] = useState([]);
  const [warehouse, setWarehouse] = useState([]);

  const [formData, setFormData] = useState({
    warehouseId: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse: "",
  });

  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const responseInventory = await axios.get(
          `http://localhost:5050/api/inventories/${params.id}`
        );
        const responseWarehouses = await axios.get(
          `http://localhost:5050/api/warehouses`
        );

        const inventoriesData = responseInventory.data;
        setInventoryItem(inventoriesData);
        setWarehouse(responseWarehouses.data);

        setFormData({
          warehouse_id: inventoriesData.warehouse_id,
          itemName: inventoriesData.item_name,
          description: inventoriesData.description,
          category: inventoriesData.category,
          status: inventoriesData.status,
          quantity: inventoriesData.quantity,
          // warehouse_name: formData.warehouse,
          
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchInventoryDetails();
  }, []);

  const [formValidation, setFormValidation] = useState({
    itemName: true,
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
  };

  const handleCancel = (id) => {
    navigate(`/inventory`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newValidation = {};

    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      if (typeof value === 'string' && value.trim() === "") {
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
        let newInventoryItem = {
          item_name: formData.itemName,
          description: formData.description,
          category: formData.category,
          status: formData.status,
          quantity: formData.quantity,
          warehouse_id: formData.warehouse_id,
        };
        if (newInventoryItem.status === "Out of Stock"){
          newInventoryItem = ({ ...newInventoryItem, quantity: 0 });
        }

        const response = await axios.put(
          `http://localhost:5050/api/inventories/${params.id}`,
          newInventoryItem
        );
        alert("Inventory Item edited successfully!");
      } catch (error) {
        console.error(error)

      }

      console.log("Form is valid. Submitting data...", formData);
      navigate("/inventory");
    } else {
      alert("Form is invalid. Please fill in all fields.");
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
            <h1 className="component-header__title">Edit Inventory Item</h1>
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
                  className={`input-box ${getInputClass("itemName")}`}
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
                  <option value={formData.category}>{formData.category}</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Gear">Gear</option>
                  <option value="Health">Health</option>
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
                      value="In Stock"
                      onChange={handleChange}
                      checked={
                        formData.status === "In Stock" ? true : false
                      }
                    />
                    In Stock
                  </label>
                  <label className="input-radio__container">
                    <input
                      type="radio"
                      name="status"
                      value="Out of Stock"
                      onChange={handleChange}
                      checked={
                        formData.status === "Out of Stock" ? true : false
                      }
                    />
                    Out of Stock
                  </label>
                </div>
              </label>

              {formData.status === "In Stock" ? (
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
                  name="warehouse_id"
                  id="warehouse"
                  className={`input-dropdown ${getInputClass("warehouse")}`}
                  onChange={handleChange}
                  defaultValue={inventoryItem.warehouse}
                >
                  {warehouse.sort((a,b)=>(b.id===formData.warehouseId)-(a.id===formData.warehouseId)).map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.warehouse_name}
                      </option>
                    );
                  })}
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
              buttonText="Save"
              link={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditInventory;

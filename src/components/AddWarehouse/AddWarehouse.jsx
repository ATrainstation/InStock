import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import React from "react";

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
    <div className="warehouses">
      <div className="warehouse-header">
        <h1 className="warehouse-header__title">Warehouses</h1>
      </div>

      <div className="add-warehouse__form__container">
        <div className="Warehouse Details">
          <h2>Warehouse Details</h2>

          <form>
              <label className="input-title">
                Warehouse Name
                <input />
              </label>
    
              <label className="input-title">
                Street Address
                <input />
              </label>
    
              <label className="input-title">
                City
                <input />
              </label>
    
              <label className="input-title">
                Country
                <input />
              </label>

              </form>
            </div>
          

        <div className="Contact Details">
          <h2>Contact Details</h2>

          <form>
              <label className="input-title">
                Contact Name
                <input />
              </label>
    
              <label className="input-title">
                Position
                <input />
              </label>
    
              <label className="input-title">
                Phone Number
                <input />
              </label>
    
              <label className="input-title">
                Email
                <input />
          </label>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddWarehouse;

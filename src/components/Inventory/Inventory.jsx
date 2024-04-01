import InventoryItem from "../InventoryItem/InventoryItem";
import "./Inventory.scss";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import HeaderChevron from "../../assets/icons/sort-24px.svg";

export default function () {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    navigate(`/inventory/add`);
  };



  return (  
    <div className="inventory-container">
      <div className="inventory">
        <div className="inventory-header">
          <h1 className="inventory-header__title">Inventory</h1>
          <div className="header-interactive">
            <SearchBar
              classname="header-interactive__search"
              placeholder="Search..."
            />
            <Button
              buttonText="+ Add New Item"
              classname="header-interactive__add"
              link={handleAdd}
            />
          </div>
        </div>

        <div className="inventory-list">
          <span className="inventory-item-container">
            <p>INVENTORY ITEM</p>
            <img
              className="inventory-item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="inventory-item-container">
            <p>CATEGORY</p>
            <img
              className="inventory-item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="inventory-item-container">
            <p>STATUS</p>
            <img
              className="inventory-item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="inventory-item-container inventory-item-contact">
            <p>QTY</p>
            <img
              className="inventory-item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="inventory-item-container">
            <p>WAREHOUSE</p>
            <img
              className="inventory-item-container__icon"
              src={HeaderChevron}
              alt="sort icon"
            />
          </span>
          <span className="inventory-item-container-actions">
            <p className="inventory-list__last">ACTIONS</p>
          </span>
        </div>
        <InventoryItem className="inventory-rows"/>
      </div>
    </div>
  );
}

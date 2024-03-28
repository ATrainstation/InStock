import WareHouseItem from "../WareHouseItem/WareHouseItem";
import "./WareHouse.scss";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

export default function () {

  return (
    <div className="warehouses-container"> 
    <div className="warehouses">
      <div className="warehouse-header">
        <h1 className="warehouse-header__title">Warehouses</h1>
        <div className="header-interactive">
          <SearchBar
            classname="header-interactive__search"
            placeholder="Search..."
          />
          <Button
            buttonText="+ Add New Warehouse"
            classname="header-interactive__add"
          />
        </div>
      </div>

      <div className="warehouse-list">
        <span className="item-container">
        <p>WAREHOUSE</p>
        </span>
        <span className="item-container">
        <p>ADDRESS</p>
        </span>
        <span className="item-container">
        <p>CONTACT NAME</p>
        </span>
        <span className="item-container">
        <p>CONTACT INFORMATION</p>
        </span>
        <span className="item-container-actions">
        <p className="warehouse-list__last">ACTIONS</p>
        </span>
      </div>
      <WareHouseItem className="warehouse-rows" />
    </div>
    </div>
  );
}

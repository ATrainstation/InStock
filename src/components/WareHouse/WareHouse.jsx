import "./WareHouse.scss";
import { useNavigate } from 'react-router-dom';
import WareHouseItem from "../WareHouseItem/WareHouseItem";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import HeaderChevron from "../../assets/icons/sort-24px.svg";
export default function () {

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/warehouse/add`);
  };

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

            <div className="header-interactive__add" onClick={handleNavigate}>
              <Button
                buttonText="+ Add New Warehouse"
              />
            </div>

          </div>
        </div>

        <div className="warehouse-list">
          <span className="item-container">
            <p>WAREHOUSE</p>
            <img className="item-container__icon" src={HeaderChevron} alt="sort icon" />
          </span>
          <span className="item-container">
            <p>ADDRESS</p>
            <img className="item-container__icon" src={HeaderChevron} alt="sort icon" />
          </span>
          <span className="item-container">
            <p>CONTACT NAME</p>
            <img className="item-container__icon" src={HeaderChevron} alt="sort icon" />
          </span>
          <span className="item-container item-contact">
            <p>CONTACT INFORMATION</p>
            <img className="item-container__icon" src={HeaderChevron} alt="sort icon" />
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

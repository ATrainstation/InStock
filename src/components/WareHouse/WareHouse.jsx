import WareHouseItem from "../WareHouseItem/WareHouseItem";
import "./WareHouse.scss";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom';




export default function () {

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/warehouse/add`);
  };

  return (
    <div className="warehouses">
      <div className="warehouse-header">
        <h1 className="warehouse-header__title">Warehouses</h1>
        <div className="header-interactive">
          <SearchBar
            classname="header-interactive__search"
            placeholder="Search..."
          />
          <div onClick={handleNavigate}>
            <Button
              buttonText="+ Add New Warehouse"
              classname="header-interactive__add"
            />
          </div>
        </div>
      </div>

      <div className="warehouse-list">
        <p>WAREHOUSE</p>
        <p>ADDRESS</p>
        <p>CONTACT NAME</p>
        <p>CONTACT INFORMATION</p>
        <p>ACTIONS</p>
      </div>
      <WareHouseItem className="warehouse-rows" />
    </div>
  );
}

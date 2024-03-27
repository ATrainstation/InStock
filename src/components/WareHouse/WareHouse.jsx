import WareHouseItem from "../WareHouseItem/WareHouseItem";
import "./WareHouse.scss";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

export default function () {
  return (
    <div className="warehouses">
      <div className="warehouse-header">
        <h1 className="warehouse-header__title">Warehouses</h1>
        <div className="header-interactive">
          <SearchBar placeholder='Search'/>
          <Button/>
        </div>
      </div>

      <div className="warehouse-list">
        <WareHouseItem className="warehouse-columns" />
      </div>
    </div>
  );
}

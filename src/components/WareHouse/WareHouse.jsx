import WareHouseItem from "../WareHouseItem/WareHouseItem";
import './WareHouse.scss';

export default function () {

  return(
<div className="warehouses">
<div className="warehouse-header">
  <h1 className="`warehouse-header__title">Warehouses</h1>
  <input className="`warehouse-header__search" type="text" />
  <button className="`warehouse-header__add"></button>
</div>

<div className="warehouse-list">
<WareHouseItem className="warehouse-columns"/>
</div>
</div>
)
}
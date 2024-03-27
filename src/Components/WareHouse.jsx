import WareHouseItem from "./WareHouseItem"

export default function () {

  return(
<div className="warehouses">
<div className="warehouse-header">
  <h1 className="`warehouses-header__title">Warehouses</h1>
  <input className="`warehouses-header__search" type="text" />
  <button className="`warehouses-header__add"></button>
</div>

<div className="warehouse-list">
<WareHouseItem className="warehouse-columns"/>
</div>
</div>
)
}
import "./AddInventoryItem.scss";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

export default function AddInventoryItem() {
  return (
    <div className="inventory-add__container">
      <div className="inventory-add">
        <div className="inventory-add__header">
          <Link to="/inventory">
            <img className="inventory-add__back-icon" src={backIcon} alt="" />
          </Link>
          <h1>Add New Inventory Item </h1>
        </div>
        <form className="item-details-form">
            <h2>Item Details</h2>
            <label>Item Name</label>
            <input type="text" name="itemname" id="" />
            <label>Description</label>
            <textarea name="description" id="" cols="30" rows="10"></textarea>
            <label>Category</label>
            <select name="category" id="">
                <option value="Electronics">Electronics</option>
                <option value="Other">Other</option>
            </select>

            <button onClick={}>s</button>
        </form>
      </div>
    </div>
  );
}

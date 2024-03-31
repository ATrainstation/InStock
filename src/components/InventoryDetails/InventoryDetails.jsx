import "./InventoryDetails.scss";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import Button from "../Button/Button";
import IsInStock from "../IsInStock/IsInStock";
import { Link } from "react-router-dom";

export default function InventoryDetails() {
  return (
    <div className="InventoryDetails-container">
      <div className="InventoryDetails">
        <div className="details-header">
          <div className="details-title">
            <Link to='/inventory' className="details-title__back"> 
              <img src={BackIcon} alt="back icon" />
            </Link>
            <h1 className="details-title__title">Television</h1>
          </div>
          <Link to='/warehouse/:id/inventory/:id/edit'>
          <Button buttonText="Edit" classname="edit-button" />
          </Link>
        </div>
        <div className="details-body">
          <div className="body-container1">
            <div className="body">
              <p className="body__header">ITEM DESCRIPTION:</p>
              <p className="body__text-descript">sdafdawsasd</p>
            </div>
            <div className="body">
              <p className="body__header">CATEGORY:</p>
              <p className="body__text">SDFASDF</p>
            </div>
          </div>

          <div className="body-container2">
            <div className="body-status-quantity">
              <div className="body-status">
                <p className="body__header">STATUS:</p>
                {/* {<IsInStock isInStock={true} />} */}
              </div>
              <div className="body-quantity">
                <p className="body__header">QUANTITY:</p>
                <p className="body__text">FAsdsad</p>
              </div>
            </div>
            <div className="body">
              <p className="body__header">WAREHOUSE:</p>
              <p className="body__text">aSDASDa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

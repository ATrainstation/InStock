import "./InventoryDetails.scss";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import Button from "../Button/Button";

export default function InventoryDetails() {
  return (
    <div className="InventoryDetails-container">
      <div className="InventoryDetails">
        <div className="details-header">
          <div className="details-title">
            <img
              className="details-title__back"
              src={BackIcon}
              alt="back icon"
            />
            <h1 className="details-title__title">Television</h1>
          </div>
          <Button buttonText="Edit" classname="edit-button" />
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
              <p className="body__text">asdsdF</p>
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

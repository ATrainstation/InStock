import "./WarehouseDetails.scss";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import Button from "../Button/Button";
import IsInStock from "../IsInStock/IsInStock";
import { Link } from "react-router-dom";

export default function WarehouseDetails() {
  return (
    <div className="WarehouseDetails-container">
      <div className="WarehouseDetails">
        <div className="details-header">
          <div className="details-title">
            <Link to="/" className="details-title__back">
              <img src={BackIcon} alt="back icon" />
            </Link>
            <h1 className="details-title__title">Toronto</h1>
          </div>
          <Link to="/warehouse/:id/edit">
            <Button buttonText="Edit" classname="edit-button" />
          </Link>
        </div>
        <div className="details-body">
          <div className="body-container1">
            <div className="body">
              <p className="body__header">WAREHOUSE ADDRESS:</p>
              <div className="body__text--wrapper">
                <p className="body__text body__text-descript">
                  482 Front Street W
                </p>
                <p className="body__text body__text-descript">
                  Toronto, Canada
                </p>
              </div>
            </div>
          </div>

          <div className="body-container2">
            <div className="body-contact-info">
              <div className="body-contact">
                <p className="body__header">CONTACT NAME:</p>
                <p className="body__text">Rocket Racoon</p>
                <p className="body__text">Toronto Mans</p>
              </div>
              <div className="body-contact">
                <p className="body__header">CONTACT INFORMATION:</p>
                <p className="body__text">+1(416)647-0905</p>
                <p className="body__text">rracoon@tdot.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

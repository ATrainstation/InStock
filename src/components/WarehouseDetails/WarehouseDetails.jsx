import "./WarehouseDetails.scss";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import WarehouseDetailsItem from '../WareHouseDetailsItem/WareHouseDetailsItem';
import HeaderChevron from '../../assets/icons/sort-24px.svg';

export default function WarehouseDetails() {
  const handleEdit = (e) => {
    navigate(`/warehouse/:id/edit`)
  }

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
          <div className="details-body-container1">
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

          <div className="details-body-container2">
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
        <div className="warehouse-details-list">
          <span className="details-item-container details-item-container-item">
            <p>INVENTORY ITEM</p>
            <img className="details-item-container details-item-container__icon" src={HeaderChevron} alt="sort icon" />
          </span>
          <span className="details-item-container details-item-container-status">
            <p>CATEGORY</p>
            <img className="details-item-container__icon" src={HeaderChevron} alt="sort icon" />
          </span>
          <span className="details-item-container details-item-container-category">
            <p>STATUS</p>
            <img className="details-item-container__icon" src={HeaderChevron} alt="sort icon" />
          </span>
          <span className="details-item-container details-item-container-quantity">
            <p>QUANTITY</p>
            <img className="details-item-container__icon" src={HeaderChevron} alt="sort icon" />
          </span>
          <span className="details-item-container-actions">
            <p className="details-warehouse-list__last">ACTIONS</p>
          </span>
        </div>
        <WarehouseDetailsItem className="details-warehouse-rows" 
        // key={id}
        handleEdit={handleEdit}
         />
      </div>
    </div>
  );
}

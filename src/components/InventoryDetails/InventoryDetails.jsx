import "./InventoryDetails.scss";
import BackIcon from "../../assets/icons/arrow_back-24px.svg";
import Button from "../Button/Button";
import IsInStock from "../IsInStock/IsInStock";
import { Link , useParams } from "react-router-dom";
import axios from "axios";
import { useEffect , useState} from "react";

export default function InventoryDetails() {

  const params = useParams();
  const [inventory, setInventory] = useState([]);
  const [warehouses, setWarehouses] = useState([]);



  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const getInventory = await axios.get(`http://localhost:5050/api/inventories/${params.id}`);
        setInventory(getInventory.data);
        console.log(getInventory.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInventoryDetails();

    axios
    .get("http://localhost:5050/api/warehouses")
    .then((response) => {
      const warehouseMap = {};
      response.data.forEach((warehouse) => {
        warehouseMap[warehouse.id] = warehouse.warehouse_name;
      });
      setWarehouses(warehouseMap);
    })
    .catch((error) => {
      console.error("Error fetching warehouses", error);
    });

  },[]);


  return (
    <div className="InventoryDetails-container">
      <div className="InventoryDetails">
        <div className="details-header">
          <div className="details-title">
            <Link to='/inventory' className="details-title__back"> 
              <img src={BackIcon} alt="back icon" />
            </Link>
            <h1 className="details-title__title">{inventory.item_name}</h1>
          </div>
          <Link to={`/inventory/${inventory.id}/edit`}>
          <Button buttonText="Edit" classname="edit-button" />
          </Link>
        </div>
        <div className="details-body">
          <div className="body-container1">
            <div className="body">
              <p className="body__header">ITEM DESCRIPTION:</p>
              <p className="body__text-descript">{inventory.description}</p>
            </div>
            <div className="body">
              <p className="body__header">CATEGORY:</p>
              <p className="body__text">{inventory.category}</p>
            </div>
          </div>

          <div className="body-container2">
            <div className="body-status-quantity">
              <div className="body-status">
                <p className="body__header">STATUS:</p>
                <IsInStock isInStock={inventory.status}/>
              </div>
              <div className="body-quantity">
                <p className="body__header">QUANTITY:</p>
                <p className="body__text">{inventory.quantity}</p>
              </div>
            </div>
            <div className="body">
              <p className="body__header">WAREHOUSE:</p>
              <p className="body__text">{warehouses[inventory.warehouse_id]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

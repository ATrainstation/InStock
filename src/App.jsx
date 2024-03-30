import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import WareHouse from "./components/WareHouse/WareHouse";
import Footer from "./components/Footer/Footer";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import Inventory from "./components/Inventory/Inventory";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

export default function App() {
 
  
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<WareHouse />} />
        <Route path="/warehouses" element={<>WareHouse</>} />
        <Route path="/warehouse/:id" element={<WarehouseDetails />} />
        <Route path="/warehouse/:id/edit" element={<EditWarehouse />} />
        <Route path="/warehouse/:id/edit" element={<>EditWarehouse</>} />
        <Route path="/warehouse/:id/add" element={<>AddWarehouse</>} />
        <Route path="/warehouse/:id/inventory" element={<Inventory/>} />
        <Route
          path="/warehouse/:id/inventory/:id"
          element={<InventoryDetails />}
        />
        <Route
          path="/warehouse/:id/inventory/:id/edit"
          element={<>EditItem</>}
        />
        <Route path="/warehouse/:id/inventory/:id/add" element={<>AddItem</>} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

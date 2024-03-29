import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import WareHouse from "./components/WareHouse/WareHouse";
import Footer from "./components/Footer/Footer";
import Inventory from "./components/Inventory/Inventory";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";




export default function App() {
  
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<WareHouse/>} />
        <Route path="/warehouses" element={<>WareHouse</>} />
        <Route path="/warehouse/:id" element={<>WarehouseDetails</>} />
        <Route path="/warehouse/:id/edit" element={<>EditWarehouse</>} />
        <Route path="/warehouse/:id/add" element={<>AddWarehouse</>} />
        <Route path="/warehouse/:id/inventory" element={<>ItemInventory</>} />
        <Route
          path="/warehouse/:id/inventory/:id"
          element={<>ItemInventoryDetails</>}
        />
        <Route
          path="/warehouse/:id/inventory/:id/edit"
          element={<>EditItem</>}
        />
        <Route path="/inventory/add" element={<AddInventoryItem/>} />
        <Route path="/inventory" element={<Inventory/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

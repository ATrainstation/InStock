import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/warehouses" element={<wareHouse />} />
        <Route path="/warehouse/:id" element={<warehouseDetails />} />
        <Route path="/warehouse/:id/edit" element={<editWarehouse />} />
        <Route path="/warehouse/:id/add" element={<addWarehouse />} />
        <Route path="/warehouse/:id/inventory" element={<itemInventory />} />
        <Route
          path="/warehouse/:id/inventory/:id"
          element={<itemInventoryDetails />}
        />
        <Route
          path="/warehouse/:id/inventory/:id/edit"
          element={<editItem />}
        />
        <Route path="/warehouse/:id/inventory/:id/add" element={<addItem />} />
      </Routes>
    </BrowserRouter>
  );
}

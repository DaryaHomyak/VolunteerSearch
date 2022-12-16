import { Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/Index/indexPage";
import { RegisterPage } from "./pages/Register/registerPage";
import { OrdersPage } from "./pages/Orders/ordersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App;

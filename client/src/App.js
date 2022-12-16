import { Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/Index/indexPage";
import { RegisterPage } from "./pages/Register/registerPage";
import { OrdersPage } from "./pages/Orders/ordersPage";
import { MainPage } from "./pages/index.js";
import { CompanyPage } from "./pages/Company/Company.jsx";
import { VolunteerPage } from "./pages/Volunteer/Volunteer.jsx";


function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<IndexPage />} /> */}
      <Route path="/" element={<MainPage />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
  );
}

export default App;

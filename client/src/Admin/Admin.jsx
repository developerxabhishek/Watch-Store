import { Route, Routes } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminAllProduct from "./AdminAllProduct/AdminAllProduct";
import AdminAddProduct from "./AdminAddProduct/AdminAddProduct";
import AdminOrders from "./AdminOrders/AdminOrders";
import AdminProfile from "./AdminProfile/AdminProfile";
import AdminBrand from "./AdminBrand/AdminBrand";
import AdminUpdateProduct from "./AdminUpdateProduct/AdminUpdateProduct";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route  path="/" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="/AdminDashboard" element={<AdminDashboard />} />
      <Route path="/AdminAllProduct" element={<AdminAllProduct />} />
      <Route path="/AdminAddProduct" element={<AdminAddProduct />} />
      <Route path="/AdminProfile" element={<AdminProfile/>} />
      <Route path="/AdminBrand" element={<AdminBrand/>} />
      <Route path="/AdminOrder" element={<AdminOrders/>} />
      <Route path="/updateProduct" element={<AdminUpdateProduct/>} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;

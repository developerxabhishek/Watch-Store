import { Routes, Route } from "react-router-dom";
import UserLayout from "./UserLayout";
import Homepage from "./Pages/Homepage/Homepage";
import Product from "./Pages/Productpage/Product";
import Cart from "./Pages/Cart/Cart";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Productdetails from "./Components/common/Productdetails/Productdetails";
import Errorpage from "./Pages/Errorpage/Errorpage";
import OtpVerification from "../Authentication/OPT/OtpVerification";
import Wishlist from "./Pages/Wishlist/Wishlist";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import AllProduct from "./Pages/AllProduct/AllProduct";
import Admin from "../Admin/Admin";
const User = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Products" element={<AllProduct />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Profile" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Productdetail" element={<Productdetails />} />
          <Route path="/OtpVerification" element={<OtpVerification />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/ProfilePage" element={<Login />} />
          <Route path="/*" element={<Errorpage />} />
        </Route>
      </Routes>
    </>
  );
};
export default User;

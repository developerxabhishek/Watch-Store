import "./Navbar.css";
import { links } from "../../../Data/Data";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useMediaQuery } from "usehooks-ts";
import NavbarPopup from "./NavbarPopup/NavbarPopup";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoIosLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import { setUserDetails } from "../../../Slices/userDetailSlice";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const cartData = useSelector((state) => state.cartSlice.cart);
  const match = useMediaQuery("(max-width: 821px)");

  const [showSearch, setShowSearch] = useState(false);

  // const isLogin = useSelector((state) => state.isloginReducer.value);

  const userDetails = useSelector((state) => state.userDetailsReducer.value);
  const isLogin = Object.keys(userDetails).length;
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (isLogin > 0) {
      return (
        <IoIosLogOut
          className="icon"
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => {
            dispatch(setUserDetails({}));

            toast.error(" Logout Successfull !", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
        />
      );
    } else {
      return (
        <Link to="/ProfilePage" style={{ color: "white" }}>
          <CgProfile className="icon" />
        </Link>
      );
    }
  };
  return (
    <>
      <div className="header-container">
        <div className="nav-container">
          <div className="heading-container">
            <h1>
              Watch<span style={{ color: "orange" }}>Store</span>
            </h1>
          </div>

          <div className={match ? "hide" : "link-container"}>
            <li className="link">
              <Link to="/Home" style={{ color: "white" }}>
                Home
              </Link>
            </li>
            <li className="link">
              
                <AnchorLink href="#scroll-contact" style={{ color: "white" }}>
                  About
                </AnchorLink>
              
            </li>
            <li className="link">
              <Link to="/Products" style={{ color: "white" }}>
                Products
              </Link>
            </li>
            <li className="link">
              <Link to="/Order" style={{ color: "white" }}>
                Order
              </Link>
            </li>

            <li className="link">
              <AnchorLink href="#scroll-contact" style={{ color: "white" }}>
                Contact
              </AnchorLink>
            </li>
          </div>

          <div className={match ? "hide" : "sideicon-container"}>
            <Link to="/Products" style={{ color: "white" }}>
              <IoSearch
                className="icon"
                onClick={() => {
                  setShowSearch(!showSearch);
                }}
              />
            </Link>
            <Link to="/Wishlist" style={{ color: "white" }}>
              <FaRegHeart className="icon" />
            </Link>
            <Link to="/Cart" style={{ color: "white" }}>
              <FiShoppingCart className="icon" />
              <span
                style={{ position: "relative", bottom: "30px", right: "35px" }}
                className="cart-badge"
              >
                {cartData.length}
              </span>
            </Link>
            {handleLogin()}
          </div>
          <div className={match ? "popup-container-parent" : "hide"}>
            <IoSearch
              className="icon"
              onClick={() => {
                setShowSearch(!showSearch);
              }}
            />
            <NavbarPopup />
          </div>
        </div>
        {/* 
            <input type="text" className={!match?"search-area":"hide"} style={!showSearch ? {translate:'140vw'}:{translate:'77vw',width:'20vw',zIndex:"111"}} placeholder="Serach here..." />

            <input type="text" className={match?"search-area-mobile":"hide"} style={!showSearch ? {translate:'140vw'}:{translate:'5vw',width:'90%', top:'12%',zIndex:"111"}} placeholder="Serach here..." /> */}
      </div>
    </>
  );
};

export default Navbar;

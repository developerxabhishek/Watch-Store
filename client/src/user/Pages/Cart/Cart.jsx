import "./Cart.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  qtyDecrease,
  qtyIncrease,
  proqtyDelete,
} from "../../../Slices/cartSlice";

const Cart = () => {
  let Sum =0;
  let shipping = 100;
  const [cartItems, setCartItems] = useState("");
  const cartData = useSelector((state) => state.cartSlice.cart);
  const dispatch = useDispatch();

  const cardQuantity = () => {
    if (cartData.length > 0) {
      setCartItems(`Cart (${cartData.length} items)`);
      shipping = 100;
    } else {
      setCartItems("Your Cart is empty");
    }
  };
  useEffect(() => {
    cardQuantity();
  }, []);

  const proqtyInc = (id) => {
    dispatch(qtyIncrease({ id: id }));
  };

  const proqtyDec = (id) => {
    dispatch(qtyDecrease({ id: id }));
  };

  const productRemove = (id) => {
    dispatch(proqtyDelete({ id: id }));
  };
  return (
    <>
      <div className="cart">
        <h1>Shopping Cart</h1>
        <div className="cart-container">
          <div className="cart-part1">
            <h6 className="cart-h6">{cartItems}</h6>

            {cartData.map((key) => {
              Sum += key.quantity * key.price;
              return (
                <div className="cart-part-1-content">
                  <div className="cart-part-1-img">
                    <img src={key.image} alt="img" height="100%" width="100%" />
                  </div>
                  <div className="cart-part1-details">
                    <div className="cart-quantity-handler">
                      <h2>{key.brand}</h2>{" "}
                      <div>
                        {" "}
                        <span
                          onClick={() => {
                            proqtyDec(key.id);
                          }}
                        >
                          -
                        </span>{" "}
                        <span>{key.quantity}</span>{" "}
                        <span
                          onClick={() => {
                            proqtyInc(key.id);
                          }}
                        >
                          +
                        </span>{" "}
                      </div>
                    </div>
                    <p>{key.productname}</p>
                    <p>Color : {key.color}</p>
                    <p>Price : {key.price}</p>
                    <div className="cartremove">
                      <div className="cart-buttons">
                        <button
                          onClick={() => {
                            productRemove(key.id);
                          }}
                        >
                          {" "}
                          <span>
                            <RiDeleteBin5Line
                              style={{ fontSize: "20px", marginRight: "10px" }}
                            />
                          </span>
                          <span className="wishremove">Remove Item</span>
                        </button>
                        <button>
                          <span>
                            <FaHeart
                              style={{ fontSize: "20px", marginRight: "10px" }}
                            />{" "}
                          </span>
                          <span className="wishremove">Move to Wishlist</span>
                        </button>
                      </div>
                      <h2 className="cart-total-price">
                        {key.quantity * key.price}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-part2">
            <h6 className="cart-h6">The total Amount of</h6>
            <div className="cart-page-checkout">
              <p>Total Price </p>
              <p>{Sum}</p>
            </div>
            <div className="cart-page-checkout">
              <p>Shipping </p>
              <p>{shipping}</p>
            </div>
            <hr size="1" />
            <div className="cart-page-checkout">
              <p>Amount to pay </p>
              <p>{Sum + shipping}</p>
            </div>
            <button className="go-to-checkout"><Link to="/Checkout">Go to Checkout</Link></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

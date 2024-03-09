import { useState } from "react";
import "./Productdetails.css";
import StarRatings from "react-star-ratings";
import { FaFacebook, FaWhatsapp, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../../../../Slices/cartSlice";
const Productdetails = () => {
  const [img, setimg] = useState();
  const ProductDetails = useSelector((state) => state.productDetails.value);
  // const mycart = useSelector((state) => state.cartSlice.cart);
  const dispatch = useDispatch();
  // console.log(mycart);

  const addtocarts = async () => {
    await dispatch(
      addtocart({
        id: ProductDetails._id,
        brand: ProductDetails.brand,
        productname: ProductDetails.productname,
        color: ProductDetails.color,
        price: ProductDetails.discount,
        image: ProductDetails.images[0],
        quantity: 1,
      })
    );
  };

  return (
    <>
      <div class="card-wrapper">
        <div class="cards">
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase">
                <img
                  src={img}
                  alt="watch-img"
                  height={"500px"}
                  width={"500px"}
                />
              </div>
            </div>
            <div class="img-select">
              <div class="img-item">
                <img
                  src={ProductDetails.images[0]}
                  alt="shoe image"
                  onMouseEnter={() => {
                    setimg(ProductDetails.images[0]);
                  }}
                  onLoad={() => {
                    setimg(ProductDetails.images[0]);
                  }}
                />
              </div>
              <div class="img-item">
                <img
                  src={ProductDetails.images[1]}
                  alt="shoe image"
                  onMouseEnter={() => {
                    setimg(ProductDetails.images[1]);
                  }}
                />
              </div>
              <div class="img-item">
                <img
                  src={ProductDetails.images[2]}
                  alt="shoe image"
                  onMouseEnter={() => {
                    setimg(ProductDetails.images[2]);
                  }}
                />
              </div>
              <div class="img-item">
                <img
                  src={ProductDetails.images[3]}
                  alt="shoe image"
                  onMouseEnter={() => {
                    setimg(ProductDetails.images[3]);
                  }}
                />
              </div>
            </div>
          </div>

          <div class="product-content">
            <h2 class="product-title">{ProductDetails.brand}</h2>
            <h2>ref89545</h2>
            {/* <h2>{key.productid}</h2> */}
            <h2>{ProductDetails.productname}</h2>
            <div class="product-rating">
              <StarRatings
                rating={5}
                starDimension="20px"
                starSpacing="5px"
                starRatedColor="orange"
                numberOfStars={5}
                name="rating"
              />
              {/* <span>{key.productrating}</span> */}
            </div>

            <div class="product-price">
              <p class="last-price">
                Old Price: <span>{ProductDetails.price}</span>
              </p>
              <p class="new-price">
                New Price:{" "}
                <span>
                  {/* {key.newprice} ({key.discount}%) */}
                  {ProductDetails.discount}
                </span>
              </p>
            </div>

            <div class="product-detail">
              <h2>Description </h2>
              <p>{ProductDetails.description}</p>

              <ul>
                <li>
                  Color: <span>{ProductDetails.color}</span>
                </li>
                <li>
                  Available: <span>{ProductDetails.quantity}</span>
                </li>
                <li>
                  Gender: <span>{ProductDetails.gender}</span>
                </li>
                <li>
                  Shipping Area: <span>{ProductDetails.shippingarea}</span>
                </li>
                <li>
                  Shipping Fee: <span>{ProductDetails.shippingfees}</span>
                </li>
                <li>
                  Warranty: <span>{ProductDetails.warranty}</span>
                </li>
                <li>
                  Country of origin: <span>{ProductDetails.origin}</span>
                </li>
              </ul>
            </div>

            <div class="purchase-info">
              <button type="button" class="btn addtocart" onClick={addtocarts}>
                Add to Cart
              </button>
              <button type="button" class="btn addtowishlist">
                Add to Wishlist
              </button>
            </div>

            <div class="social-links">
              <p>Share At: </p>
              <FaFacebook className="product-detail-social-icon" />
              <FaXTwitter className="product-detail-social-icon" />
              <FaWhatsapp className="product-detail-social-icon" />
              <FaInstagramSquare className="product-detail-social-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetails;

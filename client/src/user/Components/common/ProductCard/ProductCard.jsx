import "./ProductCard.css";
import { CiShoppingCart,CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
const imgs="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2f782c9e/images/Titan/Catalog/1829NM02_1.jpg?sw=360&sh=360";

const ProductCard = () => {
  return (
    <>
    
        <div className="productcard">
            <img src={imgs} alt="product-img" />
            <div className="product-card-details">
                <h1>Titan</h1>
                <h5>rp7800h</h5>
                <span>
                <StarRatings
                  rating={5}
                  starDimension="15px"
                  starSpacing="5px"
                  starRatedColor="orange"
                  numberOfStars={5}
                  name="rating"
                />
                </span>
                <h2>TISSOT T-CLASSIC DIAL MEN 40MM by titan watch.</h2>
                <h2>Mens Watch</h2>
                <h2 style={{color:"red" ,textDecoration:"line-through"}}>6000</h2>
                <h2> <span style={{color:"green"}}>5000</span> (5%)</h2>
               
               <button className="product-page-cart-icon"><CiShoppingCart className="product-page-cart-icon1" />Add to  Cart</button>
               <span className="product-page-wishlist-icon"><CiHeart /></span>
               <span className="product-page-view-icon"><Link to="/Productdetail" style={{color:"black"}}><FaEye /></Link></span>
            </div>
        </div>
    </>
  )
}

export default ProductCard

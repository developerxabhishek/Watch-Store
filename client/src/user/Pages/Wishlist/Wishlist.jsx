import { Link } from "react-router-dom";
import "./Wishlist.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removewishlist } from "../../../Slices/WishlistSlice";
import { useEffect } from "react";
import { addtocart } from "../../../Slices/cartSlice";

const Wishlist = () => {
  const mydispatch = useDispatch();
  const wislistData = useSelector((state) => state.wishlistSlice.wishlist);
  console.log(wislistData);

  const removewishlistdata = (id) => {
    mydispatch(removewishlist({ id: id }));
  };
  useEffect(() => {
    removewishlistdata();
  }, []);
  



  const mydata = wislistData.map((key) => (
    <tr style={{ background: "none" }}>
      <td data-column="Thumbnail">
        <img src={key.image} alt="wishlist" height="60px" width="60px" />
      </td>
      <td data-column="Name">{key.productname}</td>
      <td data-column="Price">{key.price}</td>
      <td data-column="Add to Cart">
        <FiShoppingCart style={{ fontSize: "3rem" }} />
      </td>
      <td data-column="Remove">
        <CiCircleRemove
          style={{ fontSize: "3rem" }}
          onClick={() => {
            removewishlistdata(key.id);
          }}
        />
      </td>
    </tr>
  ));
  return (
    <>
    <center>
      <div className="wishlist-container">
        <h1 style={{ fontSize: "2.5rem", margin: "0 0 5px 5%" }}>Wishlist</h1>
        <table style={{width:"80%"}}>
          <thead>
            <tr>
              <th style={{width:"200px"}}>Thumbnail</th>
              <th style={{width:"600px"}}> Name</th>
              <th style={{width:"200px"}}>Price</th>
              <th style={{width:"200px"}}>
                Add to cart
              </th>
              <th style={{width:"200px"}}>Remove</th>
            </tr>
          </thead>
          <tbody>{mydata}</tbody>
        </table>
      </div></center>
    </>
  );
};
export default Wishlist;

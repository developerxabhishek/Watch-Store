import "../AdminTable/Admintable.css";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import { updateProduct } from "../../Slices/updateProductSlice";
import {  useDispatch } from "react-redux";


const AdminAllProduct = () => {
  const [data, setData] = useState([]);
  const myDispatch=useDispatch();
  
  const getData = async () => {
    await axios
      .get("https://watch-store-p4zm.onrender.com/display")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  let sno = 0;

  const mydelete = (id) => {
    alert(id);
    axios
      .delete(`https://watch-store-p4zm.onrender.com/deleteproduct/${id}`)
      .then((response) => {
        console.log(response.data);
        alert(response.data);
        getData();
      });
  };
  return (
    <>
      <h1 style={{ fontSize: "3rem", padding: " 10px 5%" }}>All Products</h1>
      <table>
        <thead>
          <tr>
            <th>S/n</th>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((key) => {
            sno++;
            return (
              <tr>
                <td data-column="S/n">{sno}</td>
                <td data-column="image">
                  <img
                    src={key.images[0]}
                    alt=""
                    style={{ height: "80px", width: "80px" }}
                  />
                </td>
                <td data-column="Name">{key.productname}</td>
                <td data-column="Brand">{key.brand}</td>
                <td data-column="Price">{key.price}</td>
                <td data-column="Quantity">{key.quantity}</td>
                <td data-column="Value">{key.quantity * key.price}</td>
                <td data-column="Action">
                  <Link to="/updateProduct"><FaEdit onClick={()=>{
                    myDispatch(updateProduct(key))
                  }} />{" "}</Link>
                  <MdDelete
                    onClick={() => {
                      mydelete(key._id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default AdminAllProduct;

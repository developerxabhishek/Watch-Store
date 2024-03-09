import "../AdminTable/Admintable.css";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";

const AdminAllProduct = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios
      .get("http://localhost:8000/display")
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
      .delete(`http://localhost:8000/deleteproduct/${id}`)
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
                <td data-column="Name">{key.productname}</td>
                <td data-column="Brand">{key.brand}</td>
                <td data-column="Price">{key.price}</td>
                <td data-column="Quantity">{key.quantity}</td>
                <td data-column="Value">{key.quantity * key.price}</td>
                <td data-column="Action">
                  <FaEye  /> <FaEdit />{" "}
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

import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminAddProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const AdminAddProduct = () => {
  const [image, setImage] = useState([]);
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setquantity] = useState("");
  const [warranty, setWarranty] = useState("");
  const [origin, setOrigin] = useState("");
  const [shippingArea, setShippingArea] = useState("");
  const [shippingFees, setShippingFees] = useState("");
  const [description, setDescription] = useState("");
  const [brandData, setBrandData] = useState([]);
  const afterSubmit = () => {
    setImage("");
    setProductName("");
    setBrand("");
    setGender("");
    setPrice("");
    setDiscount("");
    setColor("");
    setquantity("");
    setWarranty("");
    setOrigin("");
    setShippingArea("");
    setShippingFees("");
    setDescription("");
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("productname", productName);
    formData.append("brand", brand);
    formData.append("gender", gender);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("color", color);
    formData.append("quantity", quantity);
    formData.append("warranty", warranty);
    formData.append("origin", origin);
    formData.append("shippingarea", shippingArea);
    formData.append("shippingfees", shippingFees);
    formData.append("description", description);
    console.log(formData);

    Array.from(image).forEach((item) => {
      formData.append("products", item);
    });
    const url = "https://watch-store-p4zm.onrender.com/image";
    axios
      .post(url, formData)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    afterSubmit();
  };

  const getBrand = async () => {
    axios.get("https://watch-store-p4zm.onrender.com/brandDisplay").then((response) => {
      console.log(response.data);
      setBrandData(response.data);
    });
  };
  useEffect(() => {
    getBrand();
  }, []);
  return (
    <>
      <div className="admin-add-product">
        <div className="admin-add-product-container">
          <div className="admin-add-product-part1">
            <h1>Add Product</h1>
            <div>
              <label htmlFor="Product-name-admin">Product Name </label>
              <br />
              <input
                type="text"
                id="Product-name-admin"
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                value={productName}
              />
            </div>

            <div className="brand-gender-admin">
              <div>
                <label htmlFor="brand-admin">Brand</label>
                <br />
                <select
                  name="brand"
                  id="brand-admin"
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                  value={brand}
                >
                  {brandData.map((key) => {
                    return (
                      <option value={key.brandName}>{key.brandName}</option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="gender-admin">Gender</label>
                <br />
                <select
                  name="gender-admin"
                  id="gender-admin"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  value={gender}
                >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
            </div>

            <div className="admin-product-price">
              <div>
                <label htmlFor="admin-price">Price</label>
                <br />
                <input
                  type="text"
                  id="admin-price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  value={price}
                />
              </div>
              <div>
                <label htmlFor="admin-discount">Discount</label>
                <br />
                <input
                  type="text"
                  id="admin-discount"
                  onChange={(e) => {
                    setDiscount(e.target.value);
                  }}
                  value={discount}
                />
              </div>
            </div>

            <div className="admin-product-color-available">
              <div>
                <label htmlFor="admin-color">Color</label>
                <br />
                <input
                  type="text"
                  id="admin-color"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  value={color}
                />
              </div>
              <div>
                <label htmlFor="admin-available">Quantity</label>
                <br />
                <input
                  type="text"
                  id="admin-available"
                  onChange={(e) => {
                    setquantity(e.target.value);
                  }}
                  value={quantity}
                />
              </div>
            </div>

            <div className="admin-warranty-country">
              <div>
                <label htmlFor="admin-product-warranty">Warranty</label>
                <br />
                <input
                  type="text"
                  id="admin-product-warranty"
                  onChange={(e) => {
                    setWarranty(e.target.value);
                  }}
                  value={warranty}
                />
              </div>
              <div>
                <label htmlFor="admin-country-origin">Origin</label>
                <br />
                <input
                  type="text"
                  id="admin-country-origin"
                  onChange={(e) => {
                    setOrigin(e.target.value);
                  }}
                  value={origin}
                />
              </div>
            </div>

            <div className="admin-shipping">
              <div>
                <label htmlFor="admin-shipping">Shipping Area</label>
                <br />
                <input
                  type="text"
                  id="admin-shipping"
                  onChange={(e) => {
                    setShippingArea(e.target.value);
                  }}
                  value={shippingArea}
                />
              </div>
              <div>
                <label htmlFor="admin-shipping-fee">Shipping Fee</label>
                <br />
                <input
                  type="text"
                  id="admin-shipping-fee"
                  onChange={(e) => {
                    setShippingFees(e.target.value);
                  }}
                  value={shippingFees}
                />
              </div>
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <br />
              <input
                type="text"
                id="description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </div>
          </div>

          <div className="admin-add-product-part2">
            <div className="admin-image-upload-add-product">
              {/* <Adminimageupload /> */}

              <input
                onChange={(e) => {
                  setImage(e.target.files);
                }}
                name="image"
                multiple
                type="file"
              />
            </div>
            <div>
              {/* <button className="admin-image-upload-add-button" type="submit">
                Upload Image
              </button> */}
              {Array.from(image).map((item) => {
                return (
                  <span>
                    <img
                      style={{ padding: "10px" }}
                      width={150}
                      height={100}
                      src={item ? URL.createObjectURL(item) : null}
                    />
                  </span>
                );
              })}

              <button
                className="admin-image-upload-add-button"
                style={{ marginTop: "1rem" }}
                onClick={handleSubmit}
              >
                Add Product Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAddProduct;

import "./AllProduct.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox } from "@mui/material";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductDetails } from "../../../Slices/productDetailsSlice";
import { addtowishlist } from "../../../Slices/WishlistSlice";
import { CiSearch } from "react-icons/ci";

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [mySearch, setMysearch] = useState([]);
  const ProductDispatch = useDispatch();
  const wishlistDispatch = useDispatch();

  // Get all brand data from server...
  const getBrand = async () => {
    axios
      .get("https://watch-store-p4zm.onrender.com/brandDisplay")
      .then((response) => {
        setBrandData(response.data);
      });
  };
  const getData = async () => {
    await axios
      .get("https://watch-store-p4zm.onrender.com/display")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log("error"));
  };
  useEffect(() => {
    getBrand();
    getData();
  }, []);

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const addwishlist = async (myid, brand, productname, price, image) => {
    wishlistDispatch(
      addtowishlist({ id: myid, brand, productname, price, image })
    );
  };

  const handleSearch = () => {
    alert("hello");
    data.map((data) => {
      if (data.brand.toLowerCase().includes(searchData.toLowerCase())) {
        setMysearch(data);
      }
    });
  };

  let datatoDisplay = data.map((key) => (
    <div className="all-product-card">
      <Link to="/Productdetail">
        <div
          className="all-product-card-top"
          onClick={() => {
            ProductDispatch(setProductDetails(key));
          }}
        >
          <img src={key.images[0]} alt="" height="100%" width="100%" />
        </div>
      </Link>
      <div className="all-product-card-bottom">
        <CiHeart
          className="all-product-wislist-icon"
          onClick={() => {
            addwishlist(
              key._id,
              key.brand,
              key.productname,
              key.discount,
              key.images[0]
            );
          }}
        />

        <div className="all-product-brandname">{key.brand}</div>
        <div className="all-product-productname">{key.productname}</div>
        <div className="all-product-price">&#8377; {key.discount}</div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="all-products">
        <div className="all-product-right-top">
          <p style={{ fontSize: "2rem" }}>Filter</p>
          <div id="searchdiv">
            <input
              type="search"
              name=""
              id="searchboxallproduct"
              placeholder="Enter Brand Name"
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
            />
            <CiSearch className="searchlens" onClick={handleSearch} />
          </div>
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "2rem",
            }}
          >
            Sort By :
            <select name="" id="">
              <option value="">Featured</option>
              <option value="">Best Selling</option>
              <option value="">Featured</option>
            </select>
          </div> */}
        </div>

        <div className="all-product-content">
          <div className="all-product-sidebar">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fontSize: "25px" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordian-summary"
              >
                Brands
              </AccordionSummary>
              <AccordionDetails>
                {brandData.map((key) => {
                  return (
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      <Checkbox /> {key.brandName}
                    </p>
                  );
                })}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fontSize: "25px" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordian-summary"
              >
                Price
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fontSize: "25px" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordian-summary"
              >
                Color
              </AccordionSummary>
              <AccordionDetails>
                {data.map((key) => {
                  return (
                    <p style={{ fontSize: "15px" }}>
                      {" "}
                      <Checkbox /> {key.color}
                    </p>
                  );
                })}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fontSize: "25px" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordian-summary"
              >
                Gender
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ fontSize: "15px" }}>
                  <Checkbox />
                  Men{" "}
                </p>
                <p style={{ fontSize: "15px" }}>
                  <Checkbox />
                  Women{" "}
                </p>
                <p style={{ fontSize: "15px" }}>
                  <Checkbox />
                  Unisex{" "}
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fontSize: "25px" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordian-summary"
              >
                Origin
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ fontSize: "15px" }}>
                  <Checkbox />
                  India
                </p>
                <p style={{ fontSize: "15px" }}>
                  <Checkbox />
                  Others
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fontSize: "25px" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordian-summary"
              >
                Warranty Period
              </AccordionSummary>
              <AccordionDetails>
                <p style={{ fontSize: "15px" }}>
                  <Checkbox />
                  upto 1 year
                </p>
                <p style={{ fontSize: "15px" }}>
                  <Checkbox />
                  upto 2 years
                </p>
                <p style={{ fontSize: "15px" }}>
                  <Checkbox />
                  upto 3 years
                </p>
                <p style={{ fontSize: "15px" }}>
                  <Checkbox />
                  More Than 3 years
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="all-product-right">{datatoDisplay}</div>
        </div>
      </div>
    </>
  );
};
export default AllProduct;

// add search  to all products ?

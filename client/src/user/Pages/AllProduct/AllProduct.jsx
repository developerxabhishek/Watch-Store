import "./AllProduct.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, TextField } from "@mui/material";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductDetails } from "../../../Slices/productDetailsSlice";
import { addtowishlist } from "../../../Slices/WishlistSlice";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const ProductDispatch = useDispatch();
  const wishlistDispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);

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
        setFilteredData(res.data); // Initialize filteredData with all products
      })
      .catch((error) => console.log("error"));
  };

  useEffect(() => {
    getBrand();
    getData();
  }, []);

  // Function to filter products based on selected brands
  const handleBrandFilter = (brandName) => {
    const filteredProducts = data.filter(
      (product) => product.brand === brandName
    );
    setFilteredData(filteredProducts);
  };

  // Function to filter products based on price range
  const handlePriceFilter = () => {
    const filteredProducts = data.filter(
      (product) =>
        product.discount >= parseInt(minPrice) &&
        product.discount <= parseInt(maxPrice)
    );
    setFilteredData(filteredProducts);
  };

  // Function to handle search
  const handleSearch = (query) => {
    const filteredProducts = data.filter((product) =>
      product.productname.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredProducts);
  };

  const clearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setSearchData("");
    setFilteredData(data); // Reset filteredData to original data
  };

  const addwishlist = async (myid, brand, productname, price, image) => {
    wishlistDispatch(
      addtowishlist({ id: myid, brand, productname, price, image })
    );
  };

  return (
    <>
      <div className="all-products">
        <div className="all-product-right-top">
          <p style={{ fontSize: "2rem" }}  id="filter-st">Filter</p>
          <div id="searchdiv">
            <input
              type="search"
              name=""
              id="searchboxallproduct"
              placeholder="Search product..."
              value={searchData}
              onChange={(e) => {
                setSearchData(e.target.value);
                handleSearch(e.target.value); // Call handleSearch when search input changes
              }}
            />
      
          </div>
        </div>

        <div className="all-product-content">
          <div className="all-product-sidebar">
          <button onClick={clearFilters} className="clear-filter-button">Clear Filters</button>
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
                      <Checkbox 
                        onChange={() => handleBrandFilter(key.brandName)} 
                      /> {key.brandName}
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
              <AccordionDetails>
                <TextField
                  label="Min Price"
                  variant="outlined"
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <TextField
                  label="Max Price"
                  variant="outlined"
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <button onClick={handlePriceFilter}>Apply</button>
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
            {/* Other filter options */}
          </div>

          <div className="all-product-right">
            {filteredData.map((product) => (
              <div className="all-product-card" key={product._id}>
                <Link to="/Productdetail">
                  <div
                    className="all-product-card-top"
                    onClick={() => {
                      ProductDispatch(setProductDetails(product));
                    }}
                  >
                    <img
                      src={product.images[0]}
                      alt=""
                      height="100%"
                      width="100%"
                    />
                  </div>
                </Link>
                <div className="all-product-card-bottom">
                  <CiHeart
                    className="all-product-wislist-icon"
                    onClick={() => {
                      addwishlist(
                        product._id,
                        product.brand,
                        product.productname,
                        product.discount,
                        product.images[0]
                      );
                    }}
                  />
                  <div className="all-product-brandname">{product.brand}</div>
                  <div className="all-product-productname">
                    {product.productname}
                  </div>
                  <div className="all-product-price">
                    &#8377; {product.discount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProduct;

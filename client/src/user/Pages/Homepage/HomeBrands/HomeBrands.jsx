import "./HomeBrands.css";
import Carousel from "react-multi-carousel";
import axios from "axios";
import { useState, useEffect } from "react";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 740 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 740, min: 0 },
    items: 1,
  },
};

const HomeBrands = () => {
  const [brandData, setBrandData] = useState([]);
  const getBrand = async () => {
    axios.get("http://localhost:8000/brandDisplay").then((response) => {
      
      setBrandData(response.data);
    });
  };
  useEffect(() => {
    getBrand();
  }, []);
  return (
    <>
      <div className="home-brands-carousel-container">
        <h1>
          Shop By <span style={{ color: "orange" }}>Brands</span>{" "}
        </h1>

        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          {brandData.map((key) => {
            return (
              <div className="brand-card-container">
                <img
                  src={key.brandImage}
                  alt="brands"
                  width="100%"
                  height="100%"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default HomeBrands;

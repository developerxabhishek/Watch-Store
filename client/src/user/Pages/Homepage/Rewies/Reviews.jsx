import "./Reviews.css";
import { review } from "../../../../Data/Data";
import StarRatings from "react-star-ratings";
import Slider from "../../../Components/common/Slider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

const mydata = review.map((key) => {
  return (
    <div className="myreviews">
      <h1 style={{ color: "white" }}>{key.name}</h1>
      <StarRatings
        rating={key.star}
        starDimension="20px"
        starSpacing="5px"
        starRatedColor="orange"
        numberOfStars={5}
        name="rating"
      />
      <p>{key.review}</p>
    </div>
  );
});
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Reviews = () => {
  const [rating, setRating] = useState([]);

  const display = async () => {
    await axios
      .get("https://watch-store-p4zm.onrender.com/ratingdisplay")
      .then((res) => {
        console.log(res.data);
        setRating(res.data);
      });
  };
  useEffect(() => {
    display();
  }, []);

  return (
    <>
      <div className="reviews-container">
        <div className="reviews-container-left">
          <h1>
            What Our <span style={{ color: "orange" }}>Clients</span> <br /> Say
            About <br /> Our <span style={{ color: "orange" }}>Website</span>{" "}
          </h1>
          <p>
            We understand that you have questions, and we welcome <br />
            them. Below is the collection of queries which comes <br />{" "}
            frequently from our clients.
          </p>
        </div>

        <div className="reviews-container-right">
          <div className="myreviews">
            <h1 style={{ color: "white" }}>{rating[0].name}</h1>
            <StarRatings
              rating={rating[0].star}
              starDimension="20px"
              starSpacing="5px"
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
            />
            <p>{rating[0].review}</p>
          </div>

          <div className="myreviews">
            <h1 style={{ color: "white" }}>{rating[1].name}</h1>
            <StarRatings
              rating={rating[1].star}
              starDimension="20px"
              starSpacing="5px"
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
            />
            <p>{rating[1].review}</p>
          </div>

          <div className="myreviews">
            <h1 style={{ color: "white" }}>{rating[2].name}</h1>
            <StarRatings
              rating={rating[2].star}
              starDimension="20px"
              starSpacing="5px"
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
            />
            <p>{rating[2].review}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;

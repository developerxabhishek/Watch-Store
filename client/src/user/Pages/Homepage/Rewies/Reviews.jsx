import "./Reviews.css";
import { review } from "../../../../Data/Data";
import StarRatings from "react-star-ratings";
import Slider from "../../../Components/common/Slider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const mydata=review.map((key)=>{
  
return(
  
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
  <p>
  {key.review}
  </p>
</div>

)
})
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Reviews = () => {




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
        
      {mydata}

        </div>
      </div>
    </>
  );
};

export default Reviews;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { headerdata, images } from "./headerData";
const Header = () => {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 737 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 737, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ height: "auto" }}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        arrows={false}
      >
        {images.map((key) => {
          return (
            <div
              style={{
                height: "auto",
                width: "100vw",
                overflow: "hidden",
                marginTop: "10vh",
              }}
            >
              <img
                src={key}
                style={{ height: "auto", width: "100vw" }}
                onClick={() => {
                  window.location = "";
                }}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Header;

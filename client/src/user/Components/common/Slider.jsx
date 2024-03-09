import { Children } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



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
const Slider=(props)=>{
  return(
      <>

       <div id="carouselcont" style={{padding:"5%"}}>
       
           <Carousel responsive={responsive}
               swipeable={true}
              draggable={true}>
             <div>gggku</div>
             <div>gggku</div><div>gggku</div><div>gggku</div><div>gggku</div><div>gggku</div><div>gggku</div><div>gggku</div>
             
      </Carousel>
      </div>
      </>
  );
};
export default Slider;
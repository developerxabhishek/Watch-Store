import Aboutus from "./Aboutus/Aboutus";
import Header from "./Header/Header";
import HomeBrands from "./HomeBrands/HomeBrands";
import HomeGender from "./HomeGender/HomeGender";
import HomeVideo from "./HomeVideo/HomeVideo";
import Reviews from "./Rewies/Reviews";

const Homepage = () => {
  return (
    <>
      <Header />
      <HomeBrands />
      <HomeGender />
      <HomeVideo />
      <Reviews />
      <Aboutus />
    </>
  );
};

export default Homepage;

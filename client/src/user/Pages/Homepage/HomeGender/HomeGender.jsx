import "./HomeGender.css";
const men="https://www.gonoise.com/cdn/shop/files/desktop-image_1_900x.jpg?v=1703575372";
const women="https://www.gonoise.com/cdn/shop/files/desktop_IMAGES_900x.jpg?v=1704187399";
const HomeGender = () => {




  return (
    <>
    <div className="Home-Gender-container">
        <div className="Home-Gender-container-1">
          <img src={men} alt="men" height="100%" width="100%"/>
          {/* <div className="gender-info-home">
            <h1>Watches for Men</h1>
            <button>Explore Now</button>
          </div> */}
        </div>
        <div className="Home-Gender-container-1">
          <img src={women} alt="men" height="100%" width="100%" />
          {/* <div className="gender-info-home">
            <h1>Watches for Women</h1>
            <button>Explore Now</button>
          </div> */}
        </div>
    </div>
    </>
  )
}

export default HomeGender;

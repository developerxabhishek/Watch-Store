import "./Footer.css";
import { MdHomeWork } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaMobile } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/instagram";
import "react-social-icons/google";
import "react-social-icons/telegram";
import "react-social-icons/twitter";
import { links } from "../../../Data/Data";
import StarRatings from "react-star-ratings";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const Footer = () => {
  const [rating, setrating] = useState(0);
  const [reviews, setReview] = useState("");
  const ratingChanger = (newRating, name) => {
    setrating(newRating);
  };
  const userDetails = useSelector((state) => state.userDetailsReducer.value);
  const isLogin = Object.keys(userDetails).length;
  const name = userDetails.name;
  const handleSubmit = () => {
    const data = { rating, name, reviews };
    if (isLogin == 0) {
      alert("You need to login first");
    } else {
      axios
        .post("http://localhost:8000/rating", data)
        .then((response) => {
        })
        .catch(console.error());
    }
  };
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-top">
          <p className="footer-paragraph">
            Get Connected with Us On Social Media
          </p>

          <div className="footer-social-icon">
            <SocialIcon className="icon" url="www.facebook.com" />
            <SocialIcon className="icon" url="www.twitter.com" />
            <SocialIcon className="icon" url="www.instagram.com" />
            <SocialIcon className="icon" url="www.google.com" />
            <SocialIcon className="icon" url="www.telegram.com" />
          </div>
        </div>

        <div className="footer-center-section">
          <div className="footer-left-container">
            <div className="footer-left-container-1 counter">
              <h1>Menu</h1>
              {links.map((key, idx) => {
                return <p id={idx}>{key}</p>;
              })}
            </div>
            <div className="footer-left-container-2 counter">
              <h1>Usefull Links</h1>
              <p>Your Accounts</p>
              <p>Help</p>
              <p>About Us</p>
              <p>Disclaimer</p>
              <p>Privacy Policy</p>
            </div>
            <div className="footer-left-container-3 counter">
              <h1>Contact</h1>
              <p>
                <MdHomeWork className="icons" /> MP nagar Zone 1 462023{" "}
              </p>
              <p>
                <SiGmail className="icons" /> mywatch123@gmail.com
              </p>
              <p>
                <IoMdPhonePortrait className="icons" />
                1100-253-879
              </p>
              <p>
                <FaMobile className="icons" />
                +91 7782891263
              </p>
              <p>
                <IoLogoWhatsapp className="icons" />
                7782891263
              </p>
            </div>
          </div>

          <div className="footer-right-container">
            <div className="footer-right-container-parent">
              <h1 style={{ color: "orange" }}>Rate Your Purchase</h1>
              <p>{userDetails.name}</p>
              <StarRatings
                rating={rating}
                starDimension="20px"
                starSpacing="5px"
                starRatedColor="yellow"
                numberOfStars={5}
                changeRating={ratingChanger}
                name="rating"
              />

              <input
                className="footer-review-box"
                type="text"
                placeholder="Leave your Experience here..."
                style={{ color: "white" }}
                onChange={(e) => {
                  setReview(e.target.value);
                }}
              />
              <button className="footer-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="footer-container-bottom">
          <span>&copy; Copyright All rights reserved 2024 </span>
        </div>
      </div>
    </>
  );
};

export default Footer;

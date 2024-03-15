import "./OtpVerification.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import axios from "axios";
const OtpVerification = () => {
  const [first, setfirst] = useState();
  const [second, setsecond] = useState();
  const [third, setthird] = useState();
  const [fourth, setfourth] = useState();
  const [fifth, setfifth] = useState();
  const [sixth, setsixth] = useState();
  const navigate = useNavigate();
  const userid = useSelector((state) => state.userId.value);

  const submitotp = () => {
    const otp = first + second + third + fourth + fifth + sixth;
    console.log(otp);
    let data = { userId: userid, otp: otp };
    axios
      .post("https://watch-store-p4zm.onrender.com/api/user/verify-email", data)
      .then((Response) => {
        toast.success("OTP verified suceesfully", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/Login");


      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="otp-verification">
        <div className="otp-verification-container">
          <h1>OTP VERIFICATION</h1>
          <p>An otp has been sent your email</p>
          <h4>Please enter OTP to verify</h4>
          <div className="otp-verification-input">
            <input
              type="number"
              name=""
              value={first}
              id=""
              onChange={(e) => {
                setfirst(e.target.value);
              }}
              maxLength="1"
              minLength="1"
            />
            <input
              type="number"
              name=""
              value={second}
              id=""
              onChange={(e) => {
                setsecond(e.target.value);
              }}
              maxLength="1"
              minLength="1"
            />
            <input
              type="number"
              name=""
              value={third}
              id=""
              onChange={(e) => {
                setthird(e.target.value);
              }}
              maxLength="1"
              minLength="1"
            />
            <input
              type="number"
              name=""
              value={fourth}
              id=""
              onChange={(e) => {
                setfourth(e.target.value);
              }}
              maxLength="1"
              minLength="1"
            />
            <input
              type="number"
              name=""
              value={fifth}
              id=""
              onChange={(e) => {
                setfifth(e.target.value);
              }}
              maxLength="1"
              minLength="1"
            />
            <input
              type="number"
              name=""
              value={sixth}
              id=""
              onChange={(e) => {
                setsixth(e.target.value);
              }}
              maxLength="1"
              minLength="1"
            />
          </div>
          <button onClick={submitotp}>Verify</button>
        </div>
      </div>
    </>
  );
};

export default OtpVerification;

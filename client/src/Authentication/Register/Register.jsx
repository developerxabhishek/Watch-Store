import React, { useState } from "react";
import "../Authentication.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUserId } from "../../Slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Register = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle the submit event of the registration form
  function handleSubmit(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  }

  function register() {
    axios
      .post("https://watch-store-p4zm.onrender.com/api/user/create", user)
      .then((res) => {
        dispatch(setUserId(res.data._id));
        navigate("/OtpVerification");
      })
      .catch((err) => {
        console.log(err.response.data);
        setUser({});
      });
  }
  return (
    <>
      <center>
        <section>
          <div className="signin">
            <div className="content">
              <h2>Register</h2>

              <div className="form">
                <div className="inputBox">
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleSubmit}
                    required
                  />{" "}
                  <i>Name</i>
                </div>

                <div className="inputBox">
                  <input
                    type="text"
                    name="mobile"
                    value={user.mobile}
                    onChange={handleSubmit}
                    required
                  />{" "}
                  <i>Mobile</i>
                </div>

                <div className="inputBox">
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleSubmit}
                    required
                  />{" "}
                  <i>Email</i>
                </div>

                <div className="inputBox">
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleSubmit}
                    required
                  />{" "}
                  <i>Password</i>
                </div>

                <div className="links"></div>

                <div className="inputBox">
                  <input
                    type="submit"
                    value="Create My Account"
                    onClick={() => {
                      register();
                    }}
                  />{" "}
                  <Link to="/Login">
                    <li style={{ color: "white", marginTop: "20px" }}>
                      Already Registered ? Login
                    </li>
                  </Link>
                  <h2 id="userregistered"></h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </center>
    </>
  );
};

export default Register;

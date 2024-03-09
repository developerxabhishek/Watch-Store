import "../Authentication.css";
import { Link, json, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { setUserDetails } from "../../Slices/userDetailSlice";

const Login = () => {
  const [input, setInput] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const Navigate = useNavigate();

  const login = () => {
    axios
      .post("https://watch-store-p4zm.onrender.com/api/user/signin", input)
      .then((Response) => {
        const decodedToken = jwtDecode(Response.data.token);
        console.table(decodedToken);
        var jsonToken = JSON.stringify(decodedToken);
        // console.log(jsonToken);
        dispatch(setUserDetails(decodedToken));
        // window.localStorage.setItem("userDetails", jsonToken);
        Navigate("/");
        toast.success(" Login Sucessfull!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const x = localStorage.getItem("userDetails");
  // var y = JSON.parse(x);
  // console.table(y.email);
  return (
    <>
      <center>
        <section>
          <div className="signin">
            <div className="content">
              <h2>Sign In</h2>

              <div className="form">
                <div className="inputBox">
                  <input
                    type="text"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    required
                  />{" "}
                  <i>Username</i>
                </div>

                <div className="inputBox">
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    required
                  />{" "}
                  <i>Password</i>
                </div>

                <div className="inputBox">
                  <input
                    type="submit"
                    value="Login"
                    onClick={login}
                    onBlur={handleChange}
                  />
                </div>
                <ul id="loginlist">
                  <li>Forget Password</li>
                  <Link to="/Register">
                    <li>Dont have an Account ? Create one</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </center>
    </>
  );
};

export default Login;

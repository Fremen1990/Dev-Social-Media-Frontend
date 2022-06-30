import "./register.css";
import { useRef } from "react";
import { API } from "../../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords do not match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(`${API}auth/register`, user);
        history("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">DevSocialMedia</h3>
          <span className="loginDesc">
            Connect with IT world around you on DevSocialMedia.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              className="loginInput"
              ref={username}
              required
            />
            <input
              placeholder="Email"
              className="loginInput"
              ref={email}
              minLength="6"
              required
            />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              ref={password}
              minLength="6"
              required
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              type="password"
              ref={passwordAgain}
              minLength="6"
              required
            />
            <button className="loginButton">Sign Up</button>

            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className="loginRegisterButtonLink"
            >
              {" "}
              <button className="loginRegisterButton">Log into Account </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

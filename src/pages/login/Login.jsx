import "./login.css";
import { useContext, useEffect, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    setCookie("IsLoggedIn", true);
    console.log("COOKIES", cookies);
  };

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const checkedUser = JSON.parse(loggedInUser);
  //     // setUser(checkedUser);
  //   }
  // }, []);

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
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
              minLength="6"
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              required
              minLength="6"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress size="32px" /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link
              to="/register"
              style={{ textDecoration: "none" }}
              className="loginRegisterButtonLink"
            >
              {" "}
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

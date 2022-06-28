import "./login.css";
import {useRef} from "react";

export default function Login() {


  const email = useRef();
  const password = useRef();

  const handleClick = (e)=>{
    e.preventDefault()
    console.log(email.current.value, password.current.value)
  }


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
            <input placeholder="Email" type="email" className="loginInput" ref={email} required minLength="6"/>
            <input placeholder="Password" type="password" className="loginInput" ref={password} required minLength="6"/>
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import "./topbar.css";
import { Link, Navigate } from "react-router-dom";

import { photos } from "../../config";
import { icons } from "../../utils/icons";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
const { ChatIcon, SearchIcon, PersonIcon, NotificationsIcon } = icons;

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const navigate = useNavigate();

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">DevSocialMedia</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" className="topbarLink">
            Homepage
          </Link>
          <Link to={`/profile/${user.username}`} className="topbarLink">
            Timeline
          </Link>
          <button
            className="LogOutButton"
            onClick={(e) => {
              dispatch({ type: "LOGOUT", payload: null });

              navigate("/");
              console.log(user);
            }}
          >
            Logout
          </button>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? `${photos}/${user.profilePicture}`
                : `${photos}/person/noAvatar.png`
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}

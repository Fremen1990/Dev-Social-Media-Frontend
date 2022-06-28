import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useState, useEffect} from "react";
import axios from "axios";
import {API} from "../../config";
import {useParams} from "react-router-dom";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})
const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${API}users?username=${username}`)
            setUser(res.data[0])
        };
        fetchUser()
    }, [username])



    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src={user.coverPicture ||`${PF}/person/noCover.webp`}
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={PF+ "/"+user.profilePicture ||`${PF}/person/noAvatar.png`}
                            />

                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username}/>
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
        </>
    );
}

import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useState, useEffect} from "react";
import axios from "axios";
import {API} from "../../config";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})


    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${API}users/${post.userId}`)
            setUser(res.data)
        };
        fetchUser()
    }, [post.userId])


    //TODO 46:30

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
                                src={`${PF}/post/3.jpeg`}
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={`${PF}/person/7.jpeg`} alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username="admin"/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    );
}

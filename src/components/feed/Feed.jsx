import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {API} from "../../config";

export default function Feed({username}) {

    const [posts, setPosts] = useState([]);


    useEffect(() => {

        const fetchPosts = async () => {
            const res =
                username?
                await axios.get(`${API}posts/profile/${username}`)
                :
                await axios.get(`${API}posts/timeline/62ab8f0a466fe16790638395`)
            setPosts(res.data)

        };
        fetchPosts()


    }, [])

    return (
        <div className="feed">
            <div className="feedWrapper">
                {JSON.stringify(username)}
                <Share/>
                {posts.map((p) => (
                  <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    );
}

import React from "react";
import s from '../Post.module.css';
import Post from "./Post/Post";
import './MyPosts.module.css';

function MyPosts() {
    return <div>
        <div>
            My posts
        </div>

        <div className={"s.posts"}>
            <Post message={"Hi, how are you?"} likeCounter={15}/>
            <Post message={"It's my first post!"} likeCounter={8} />
        </div>
    </div>
}

export default MyPosts;
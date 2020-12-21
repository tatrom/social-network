import React from "react";
// import s from '../Post.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import './MyPosts.module.css';
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (message: string) => void

}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        debugger
        let text = newPostElement.current
        if (text) {
            props.addPost(text.value)
            text.value = '';
        }

    }
    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>

        <div className={"s.posts"}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;
import React, {KeyboardEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import './MyPosts.module.css';
import {PostType} from "../../../redux/messages-reducer";

type MyPostsType = {
    posts: Array<PostType>
    value: string
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}

function MyPosts(props: MyPostsType) {
    let postsElements = props.posts.map((p, id) => <Post key={id} message={p.message} likeCounter={p.likesCount}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.addPost(text);
        }

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.current?.value
        if (e.key === "Enter") {
            if (text) {
                props.addPost(text);
            }
        }
    }
    const onChangeHandler = (newText: string) => {
        props.updateNewPostText(newText);

    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <div>
                <textarea value={props.value} ref={newPostElement} onKeyPress={onKeyPressHandler}
                          onChange={e => onChangeHandler(e.currentTarget.value)}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>

        <div className={"s.posts"}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;
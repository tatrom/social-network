import React, {ChangeEvent, KeyboardEvent} from "react";
// import s from '../Post.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import './MyPosts.module.css';
import {ActionTypes, addMessageCreator, changeTextCreator, PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    value: string
    dispatch: (action: ActionTypes) => void
}

function MyPosts(props: MyPostsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.dispatch(addMessageCreator(text))
        }

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.current?.value
        if ( e.key === "Enter" ) {
            if (text) {
                props.dispatch(addMessageCreator(text))
            }
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        const newValue = e.currentTarget.value
        if (newValue !== undefined) {
            props.dispatch(changeTextCreator(newValue))
        }
    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
        </div>
        <div>
            <div>
                <textarea value={props.value} ref={newPostElement} onKeyPress={onKeyPressHandler} onChange={onChangeHandler}/>
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
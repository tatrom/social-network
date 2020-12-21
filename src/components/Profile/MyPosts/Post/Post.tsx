import React from "react";
import s from './Post.module.css';
// import './MyPosts.module.css';

type PostType = {
    message: string
    likeCounter: number
}

function Post(props: PostType) {
    return <div className={s.item}>
        <img
            src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2"
            alt=""/>
        {props.message}
        <div>
            <span> {props.likeCounter} like(s)</span>
        </div>
    </div>

}

export default Post;
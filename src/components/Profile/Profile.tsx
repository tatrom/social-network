import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src="https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768"
                     alt="" width={900}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
            )
}

export default Profile;
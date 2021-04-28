import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/pngtree-user-vector-avatar-png-image_1541962.jpeg";
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
                    <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={s.userPhoto}
                         alt={'img'}/>
                    </NavLink>
                    </div>
                    <div>
                {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)

                    }}>Follow</button>}

                    </div>
                    </span>
            <span>
                    <span>
                    <div>{user.name}</div><div>{user.status ? user.status : " No status"}</div>
                    </span>
                    </span>
        </div>
    )
}
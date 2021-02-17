import React from "react";
import userPhoto from "../../assets/pngtree-user-vector-avatar-png-image_1541962.jpeg";
import s from "./Users.module.css";
import {UserType} from "../../redux/store";
import { NavLink } from "react-router-dom";

export type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={(e) => props.onPageChanged(p)
                             }>{p}/</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </NavLink>
                    </div>
                    <div>
                {u.followed ? <button onClick={() => {
                    props.follow(u.id)
                }}>Follow</button> : <button onClick={() => {
                    props.unfollow(u.id)
                }}>Unfollow</button>}

                    </div>
                    </span>
                <span>
                    <span>
                    <div>{u.name}</div><div>{u.status ? u.status : " No status"}</div>
                    </span>
                    </span>
            </div>)
        }

    </div>
}

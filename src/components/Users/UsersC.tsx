import React from "react";
import userPhoto from "../../assets/pngtree-user-vector-avatar-png-image_1541962.jpeg";
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";
import {User} from "./User";

export type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>

}

export const Users: React.FC<UsersPropsType> = (props) => {

    return <div>
        <Paginator totalUserCount={props.totalUserCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}/>
        {props.users.map(u => <User user={u} followingInProgress={props.followingInProgress} follow={props.follow}
                                    unfollow={props.unfollow}/>)}

    </div>
}
import React from "react";
import {UserType} from "../../redux/users-reducer";
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
        <Paginator totalItemsCount={props.totalUserCount} portionSize={props.pageSize} onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage}/>
        {props.users.map((u) => <User key={u.id} user={u} followingInProgress={props.followingInProgress} follow={props.follow}
                                    unfollow={props.unfollow}/>)}

    </div>
}
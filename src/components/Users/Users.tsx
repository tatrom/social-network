import React from "react";
import userPhoto from "../../assets/pngtree-user-vector-avatar-png-image_1541962.jpeg";
import s from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../redux/store";

export type UsersType = {
    users: Array<UserType>
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ""}
                                 onClick={(e) => this.onPageChanged(p)
                                 }>{p}/</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                    <div>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                {u.followed ? <button onClick={() => {
                    this.props.follow(u.id)
                }}>Follow</button> : <button onClick={() => {
                    this.props.unfollow(u.id)
                }}>Unfollow</button>}

                    </div>
                    </span>
                    <span>
                    <span>
                    <div>{u.name}</div><div>{u.status ? u.status : " No status"}</div>
                    </span>
                    <span>
                {/*<div>{u.name}</div><div>{u.uniqueUrlName}</div>*/}
                    </span>
                    </span>
                </div>)
            }

        </div>
    }
}
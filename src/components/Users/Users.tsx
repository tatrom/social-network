import React from "react";
import userPhoto from "../../assets/pngtree-user-vector-avatar-png-image_1541962.jpeg";
import s from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../redux/store";

export type UsersType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export class Users extends React.Component<UsersType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)

            })
        }
    }

    render() {
        return <div>
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
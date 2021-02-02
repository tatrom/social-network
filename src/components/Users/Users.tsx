import React from "react";
import s from './Users.module.css'
import {User} from "./User";
import {UsersPageType, UserType} from "../../redux/store";

type UsersType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersType) {
    if (props.users.length === 0 ) {
    props.setUsers( [
        {
            id: 1,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
            followed: true,
            fullName: "Roman",
            status: "I am a programmer",
            location: {city: "Kiev", country: "Ukraine"}
        },
        {
            id: 2,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
            followed: false,
            fullName: "Sasha",
            status: "I am a policeman",
            location: {city: "Bahmut", country: "Ukraine"}
        },
        {
            id: 3,
            photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
            followed: true,
            fullName: "Renat",
            status: "I am a student",
            location: {city: "Kiev", country: "Ukraine"}
        }
    ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photo} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={ () => {props.follow(u.id)}}>Follow</button> : <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div><div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
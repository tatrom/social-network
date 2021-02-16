import React from "react";
import s from './Users.module.css'

type UserType = {
    id: number
    name: string
    date: number
}

export function User(props: UserType) {
    return (

        <div>
            <img src="https://freesvg.org/img/anemonenfisch.png" alt="img" width={"50px"}/>
            <h2>{props.name}</h2>
            <div>Date of registration {props.date}</div>
        </div>
    )
}
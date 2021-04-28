import s from "./Users.module.css";
import React from "react";

type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
export const Paginator: React.FC<PaginatorPropsType> = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map((p, id) => {
                return <span key={id} className={currentPage === p ? s.selectedPage : ""}
                             onClick={(e) => onPageChanged(p)
                             }>{p}/</span>
            })}
        </div>
    </div>
}


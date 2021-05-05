import s from "./Paginator.module.css";
import React, {useState} from "react";

type PaginatorPropsType = {
    totalItemsCount: number
    portionSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
export const Paginator: React.FC<PaginatorPropsType> = ({totalItemsCount, portionSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalItemsCount / portionSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => setPortionNumber(portionNumber - 1)}>Previous</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={currentPage === p ? s.currentPage : s.page} key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }
                             }>{p} </span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
        }

        <div>

        </div>
    </div>
}


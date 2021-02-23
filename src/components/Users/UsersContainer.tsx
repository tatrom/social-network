import React from "react";
import {connect} from "react-redux";
import {UserType} from "../../redux/store";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow,
    toggleFollowingProgress
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./UsersC";
import {Preloader} from "../common/Preloader";
import {AppRootStateType} from "../../redux/redux-store";
import {usersApi} from "../../api/api";

export type UsersType = {
    users: Array<UserType>
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean
    follow: (userId: number) => void
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void

}

export class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null
            }
            <Users totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer)

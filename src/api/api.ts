import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "fae18199-e7fc-4874-8413-33891c1f13c5"
    }

})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`/follow/${userId}`)
    },
    unfollowUser(userId: number) {
        return instance.delete(`/follow/${userId}`)
    }
}

export const authApi = {
    setProfile(userId: string) {
        return instance.get(`/profile/${userId}`)
    },
    me() {
        return instance.get('/auth/me')
    }
}
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "8c49b133-928a-4a57-b997-bbf0ea6abb17"
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

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status})
    }
}

export const authApi = {
    setProfile(userId: string) {
        console.warn('Obsolete method.Please use profileApi object')
        return profileApi.getProfile(userId)
    },
    me() {
        return instance.get('/auth/me')
    }
}
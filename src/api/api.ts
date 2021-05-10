import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";

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
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put('/profile', profile)
    }
}

export const authApi = {
    setProfile(userId: string) {
        console.warn('Obsolete method.Please use profileApi object')
        return profileApi.getProfile(userId)
    },
    me() {
        return instance.get('/auth/me')
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login');
    }
}

export const securityApi = {
    getCaptcha() {
        return instance.get('/security/get-captcha-url')
    }
}

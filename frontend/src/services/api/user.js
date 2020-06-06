import {api} from "./api"

export default {
    signup: async (user) => api.post('api/auth/signup', {params: user}).data,
    login: async (name) => api.post('api/auth/login', {params: name}).data
}
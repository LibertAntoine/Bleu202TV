import {api} from "./api"

export default {
    signup: async (data) => await (api.post('api/auth/signup', {user: data})),
    login: async (name) => await (api.post('api/auth/login', {uniqueName: name})),
    auth: async (token) => await (api.get('api/auth/auth', {headers : {'Authorization' : 'Bearer ' + token}}))
}
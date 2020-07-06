import {api} from "./api"
import cookie from '@/services/cookies'

export default {
    next: async (data) => await (api.post('api/roman/next', data,  {headers : {'Authorization' : 'Bearer ' + cookie.getCookie("token")}})),
}
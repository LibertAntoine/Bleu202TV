import axios from "axios"

export const api = axios.create({ baseURL: `http://` + process.env.VUE_APP_DOMAIN_API + `/` });
import axios from "axios"

export const api = axios.create({ baseURL: `https://` + process.env.VUE_APP_DOMAIN_API + `/` });
import axios from "axios"

export const api = axios.create({ baseURL: `http://` + process.env.DOMAIN_API + `/` });
import axios from 'axios'
import { getToken } from '../helpers/storage'
let base_api = "http://localhost:3001" 

export const setAxiosToken = () => {
    let token = getToken() 
    axios.defaults.headers.common.authorization = `Bearer ${token}`
}

setAxiosToken()

function login (data) {
    return axios.post(`${base_api}/auth/login`, data).then((res) => {
        return res.data
    })
}


function fetchProjects (data) {
    return axios.get(`${base_api}/projects?_page=${data._page}&_limit=${data._limit}&q=${data.keyword}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

function fetchKpi (data) {
    return axios.get(`${base_api}/kpi`, data).then(res => {
        return res.data
    })
}
// 
function addPfm(data) {
    let { role, startTime, endTime, pfm, id } = data

    let payload = {
        role,
        startTime,
        endTime,
        pfm, 
    }

    return axios.post(`${base_api}/pfm-page/${id}`, payload).then(res => {
        return res.data
    })
}

  
export { login, fetchProjects, fetchKpi, addPfm }
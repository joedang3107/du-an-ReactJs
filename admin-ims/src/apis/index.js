import axios from 'axios'
import { getToken } from '../helpers/storage'
let base_api = "http://localhost:3001"

//set request headers
export const setAxiosToken = () => {
    let token = getToken()
    axios.defaults.headers.common.authorization = `Bearer ${token}`
}

setAxiosToken()

function login(data) {
    return axios.post(`${base_api}/auth/login`, data).then((res) => {
        return res.data
    })
}


function fetchProjects(data) {
    return axios.get(`${base_api}/projects?_page=${data._page}&_limit=${data._limit}&q=${data.keyword}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

function fetchKpi(data) {
    return axios.get(`${base_api}/kpi`, data).then(res => {
        return res.data
    })
}

function fetchPfm1(data) {
    return axios.get(`${base_api}/performance1?_page=${data._page}&_limit=${data._limit}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

function fetchPfm2(data) {
    return axios.get(`${base_api}/performance2?_page=${data._page}&_limit=${data._limit}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

function fetchPfm3(data) {
    return axios.get(`${base_api}/performance3?_page=${data._page}&_limit=${data._limit}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

function fetchPfm4(data) {
    return axios.get(`${base_api}/performance4?_page=${data._page}&_limit=${data._limit}`).then(res => {
        return { list: res.data, total: res.headers["x-total-count"] }
    })
}

// fetch user

function fetchUser(data) {
    return axios.get(`${base_api}/user`, data).then(res => {
        return res.data
    })
}

// add pfm
function addPfm1(data) {

    return axios.post(`${base_api}/performance1`, data).then(res => {
        return res.data
    })
}

function addPfm2(data) {

    return axios.post(`${base_api}/performance2`, data).then(res => {
        return res.data
    })
}

function addPfm3(data) {

    return axios.post(`${base_api}/performance3`, data).then(res => {
        return res.data
    })
}

function addPfm4(data) {

    return axios.post(`${base_api}/performance4`, data).then(res => {
        return res.data
    })
}

// delete pfm

function deletePfm1(id) {

    return axios.delete(`${base_api}/performance1/${id}`).then(res => {
        return res.data
    })
}

export { login, fetchProjects, fetchKpi, fetchPfm1, fetchPfm2, fetchPfm3, fetchPfm4, fetchUser, addPfm1, addPfm2, addPfm3, addPfm4, deletePfm1 }
import axios from 'axios'
import apiUrl from '../apiConfig'

export const index = (user) => {
    return axios({
        url:apiUrl + "/groups",
        method: "get",
        headers: {
            "Authorization": `Bearer ${user.token}` 
        }
    })
}

export const show = (user, id) => {
    return axios({
        url:apiUrl + "/groups/" +id,
        method: "get",
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}

export const create = (user, group) => {
    return axios({
        url:apiUrl + "/group/new",
        method: "post",
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        data:{group: group}
    })
}

export const update = (user, group ,id) => {
    return axios({
        url:apiUrl + "/groups/" + id,
        method: "put",
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        data:{group: group}
    })
}

export const destroy = (user, id) => {
    return axios({
        url:apiUrl + "/groups/" +id,
        method: "delete",
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}
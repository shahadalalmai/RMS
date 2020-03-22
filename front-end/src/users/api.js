import axios from 'axios'
import apiUrl from '../apiConfig'

export const index = (user) => {
    return axios({
        url:apiUrl + "/users",
        method: "get",
        headers: {
            "Authorization": `Bearer ${user.token}` 
        }
    })
}

export const show = (user, id) => {
    return axios({
        url:apiUrl + "/users/" +id,
        method: "get",
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}

export const update = (user, selectedUser,id) => {
    return axios({
        url:apiUrl + "/users/" + id,
        method: "put",
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        data:{user: selectedUser}
    })
}

export const destroy = (user, id) => {
    return axios({
        url:apiUrl + "/users/" +id,
        method: "delete",
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}
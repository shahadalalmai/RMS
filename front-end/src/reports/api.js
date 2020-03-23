import axios from 'axios'
import apiUrl from '../apiConfig'

export const index = (user) => {
    return axios({
        url:apiUrl + "/reports",
        method: "get",
        headers: {
            "Authorization": `Bearer ${user.token}` // to attach the user token to the API request through headers key
        }
    })
}

export const all = (user) => {
    return axios({
        url:apiUrl + "/all-reports",
        method: "get",
        headers: {
            "Authorization": `Bearer ${user.token}` 
        }
    })
}

export const show = (user, id) => {
    return axios({
        url:apiUrl + "/reports/" +id,
        method: "get",
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}

export const create = (user, report) => {
    return axios({
        url:apiUrl + "/report/new",
        method: "post",
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        data:{report: report}
    })
}

export const update = (user, report,id) => {
    return axios({
        url:apiUrl + "/reports/" + id,
        method: "put",
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        data:{report: report}
    })
}

export const destroy = (user, id) => {
    return axios({
        url:apiUrl + "/reports/" +id,
        method: "delete",
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}
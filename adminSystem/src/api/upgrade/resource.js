import request from "@/utils/request"
//列表
export function listItem(params) {
    return request({
        url: '/ota/resources/list',
        method: 'get',
        params
    })
}
export function viewItem(params) {
    return request({
        url: '/ota/resources/info',
        method: 'get',
        params
    })
}
export function addItem(data) {
    return request({
        url: '/ota/resources/add',
        method: 'post',
        data
    })
}
//更新
export function updateItem(data) {
    return request({
        url: '/ota/resources/update',
        method: 'post',
        data
    })
}
//删除
export function deleteItem(data) {
    return request({
        url: '/ota/resources/delete',
        method: 'post',
        data
    })
}



export function packageAddItem(data) {
    return request({
        url: '/ota/resources/package/add',
        method: 'post',
        data
    })
}

export function packageDeleteItem(data) {
    return request({
        url: '/ota/resources/package/delete',
        method: 'post',
        data
    })
}


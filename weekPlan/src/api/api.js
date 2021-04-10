import request from "@u/request"
export function listItem(data) {
    return request({
        url: 'yz/yzGoodsReturn/goods/selectAll',
        method: 'post',
        data,
        params:{
            "sss":4
        }
    })
}
export function getIndexData(data) {
    return request({
        url: 'community/sevenClassUser/seven/status',
        method: 'get',
        params:data
    })
}

export function seeTestResult(data) {
    return request({
        url: 'community/sevenClassUser/seeTestResult',
        method: 'get',
        params:data
    })
}
export function getClassPlan(data) {
    return request({
        url: 'community/sevenClassUser/get/my/classPlan',
        method: 'post',
        data
    })
}
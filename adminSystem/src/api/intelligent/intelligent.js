import request from '@/utils/request'
export function allDefaultCourse(data) {
  return request({
    url: '/community/smartDefaultClass/see/all',
    method: 'post',
    data,
  })
}
export function addDefaultCourse(data) {
  return request({
    url: '/community/smartDefaultClass/insertOne',
    method: 'post',
    data,
  })
}
export function updateDefaultCourse(data) {
  return request({
    url: '/community/smartDefaultClass/updateOne',
    method: 'post',
    data,
  })
}

export function allCourse(data) {
  return request({
    url: '/community/smartClass/see/all',
    method: 'post',
    data,
  })
}
export function addCourse(data) {
  return request({
    url: '/community/smartClass/insertOne',
    method: 'post',
    data,
  })
}
export function updateCourse(data) {
  return request({
    url: '/community/smartClass/updateOne',
    method: 'post',
    data,
  })
}

export function allAction(data) {
  return request({
    url: '/community/cSmallClass/see/all/action',
    method: 'post',
    data,
  })
}
export function updateAction(data) {
  return request({
    url: '/community/cSmallClass/update',
    method: 'post',
    data,
  })
}
export function addAction(data) {
  return request({
    url: '/community/cSmallClass/save',
    method: 'post',
    data,
  })
}
export function allAttribute(data) {
  return request({
    url: '/community/threeAttribute/see/all/attribute',
    method: 'post',
    data,
  })
}
export function allGAttribute(params) {
  return request({
    url: '/community/threeAttribute/group/see/all/attribute',
    method: 'get',
    params,
  })
}
export function addAttribute(data) {
  return request({
    url: '/community/threeAttribute/insertOne',
    method: 'post',
    data,
  })
}
export function updateAttribute(data) {
  return request({
    url: '/community/threeAttribute/updateOne',
    method: 'post',
    data,
  })
}
export function todayYesterdayData(params) {
  return request({
    url: '/report/umeng/getTodayYesterdayData',
    method: 'get',
    params
  })
}
// 获取用户统计数据
export function userDataDay(params) {
  return request({
    url: '/report/umeng/userReport',
    method: 'get',
    params
  })
}
// 获取用户统计数据
export function userReportCount(params) {
  return request({
    url: '/report/umeng/userReportCount',
    method: 'get',
    params
  })
}

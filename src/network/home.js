import request from "network/request.js"

export function homeRequest() {
  return request({
    url: "/home/multidata"
  })
}

export function homeGoodsRequest(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  })
}

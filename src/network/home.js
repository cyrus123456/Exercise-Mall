import request from "network/request.js"

export function homeRequest() {
  return request({
    url: "/home/multidata"
  })
}

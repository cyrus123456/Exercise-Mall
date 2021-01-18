// 防抖函数。
export default function debounce(func, waitingTime = 300) {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this)
    }, waitingTime)
  }
}

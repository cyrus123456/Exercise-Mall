export default function debounce(func, waitingTime) {
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

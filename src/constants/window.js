export function getWindowSize() {
  var w = window
  var d = document
  var e = d.documentElement
  var g = d.getElementsByTagName("body")[0]
  var width = w.innerWidth || e.clientWidth || g.clientWidth
  var height = w.innerHeight || e.clientHeight || g.clientHeight

  return {
    width: width,
    height: height,
  }
}

// 画面の幅を考慮に入れてリストの高さを決定
// height ✕ width = 60000 程度
export function getListHeight() {
  const win = getWindowSize()

  const height = 60000 / win.width
  console.log(win, height)
  return Math.floor(height)
}

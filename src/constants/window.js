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
// height ✕ width = 75000 程度
export function getListSize() {
  // const baseTotal = 80000
  // const baseWidth = 400
  // const widthCoefficient = 0.8
  const win = getWindowSize()
  if (win.width > 600) {
    return {
      width: win.width,
      height: win.height,
      listHeight: (800 - 600 / 2) / 4 + 50,
    }
  }
  const listHeight = (700 - win.width / 2) / 4 + 50
  // console.log(listHeight)

  // const height = baseTotal / (baseWidth + widthFluctuation)
  // return Math.floor(height)
  return {
    width: win.width,
    height: win.height,
    listHeight: listHeight,
  }
}

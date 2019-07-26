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

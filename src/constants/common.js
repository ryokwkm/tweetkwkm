export const HOSTNAME = {
  PRD: "https://ts.2chx.net/Api/get",
  DEV: "https://ts.2chx.net/Api/get", // "http://asuseka.net:8888/Api/get",
}

/**
 * removeSlashEndOfPath
 * パスの末尾のスラッシュを削除
 */
export function removeSlashEndOfPath(path) {
  if (path.match(/\/$/)) {
    return path.slice(0, -1)
  }
  return path
}

/**
 * getUrl
 * APIのURLを取得
 */
export function getUrl(path) {
  const hostName = HOSTNAME[getEnv()]
  if (!path) {
    return hostName
  } else {
    return hostName + "/" + path
  }
}

/**
 * getEnv
 * 現在の環境を取得
 */
export function getEnv() {
  if (window.location.port === "3001") {
    return "DEV"
  } else {
    return "PRD"
  }
}

export function formatDate(date, format) {
  format = format.replace(/yyyy/g, date.getFullYear())
  format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2))
  format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2))
  format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2))
  format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2))
  format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2))
  format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3))
  return format
}

export function getMedia(article) {
  const og = JSON.parse(article.og_json)

  if (Array.isArray(og.Videos) && og.Videos.length > 0) {
    console.log(og.Videos)
  }
  if (og.Twitter.Image) {
    return og.Twitter.Image
  }
  if (Array.isArray(og.Images) && og.Images.length > 0) {
    if (og.Images[0].Url) {
      return og.Images[0].Url
    }
  } else {
    console.log(og)
  }

  return article
}

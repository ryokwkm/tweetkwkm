export const HOSTNAME = {
  PRD: "http://ts.2chx.net",
  // DEV: "http://asuseka.net:8888",
  DEV: "http://ts.2chx.net",
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

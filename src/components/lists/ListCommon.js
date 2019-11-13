// リスト表示中記事の親記事を取得 【○位は？】XXXX
export function getParentByIndex(items, parents, startIndex) {
  const article = items[startIndex] // 今表示中の記事
  var parentId = article.parent_id
  if (Number(parentId) === 0) {
    parentId = article.id
  }

  var retArticle
  if (parents) {
    parents.forEach(parent => {
      if (parent["id"] === parentId) {
        retArticle = parent
      }
    })
  }
  return retArticle
}

// リスト表示中記事の親記事、本文部分を取得
export function getParentDetailByIndex(items, startIndex) {
  const article = items[startIndex] // 今表示中の記事
  var parentId = article.parent_id
  if (Number(parentId) === 0) {
    parentId = article.id
  }

  var retArticle
  if (items) {
    items.forEach(item => {
      if (item["user_id"] === "0" && item["parent_id"] === parentId) {
        retArticle = item
      }
    })
  }
  return retArticle
}

// ListのJsonデータから画像を取得
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
    console.log("non", og)
  }

  return null
}

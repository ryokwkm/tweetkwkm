import React from "react"
import styled from "styled-components"
import { FixedSizeList } from "react-window"
import InfiniteLoader from "react-window-infinite-loader"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import * as window from "../../constants/window"
import "../../App.css"
import reactStringReplace from "react-string-replace"
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar/Avatar"

const HeaderHeight = 30
const MyListHeight = window.getListHeight()
const styles = theme => ({
  infinateList: {
    width: "100%",
    marginTop: HeaderHeight,
    // backgroundColor: theme.palette.background.paper,
  },
})

const RowContainer = styled.div`
  position: relative;
  width: 100px;
`

const InfinityList = ({
  items,
  moreItemsLoading,
  hasNextPage,
  loadMoreItems,
  handleScroll,
}) => {
  //
  const regBody = body => {
    var after = reactStringReplace(body, /(https?:\/\/\S+)/, (match, i) => (
      <a className={"link"} href={match}>
        {match}
      </a>
    ))
    after = reactStringReplace(after, /@\w+/, (match, i) => (
      <a className={"reply"} href={`https://twitter.com/${match}`}>
        @{match}
      </a>
    ))
    after = reactStringReplace(
      after,
      /[#][Ａ-Ｚａ-ｚA-Za-z一-鿆0-9０-９ぁ-ヶｦ-ﾟー._-]+/gm,
      (match, i) => (
        <a
          className={"hash"}
          href={`https://twitter.com/hashtag/${match}?src=hash`}
        >
          #{match}
        </a>
      )
    )
    return <span>{after}</span>
  }

  const regHashTag = body => {
    const regHash = /(^|\W)(#[a-z\d][\w-]*)/gi
    return (
      <span>
        {reactStringReplace(body, regHash, (hashMatch, i) => (
          <span className={"hashTag"}>{hashMatch}</span>
        ))}
      </span>
    )
  }

  const Row = ({ index, style, ref }) => {
    const itemLoading = index >= items.length

    if (itemLoading) {
      return <RowContainer style={{ ...style, backgroundColor: "grey" }} />
    } else {
      var userId = items[index].user_id
      if (Number(userId) === 0) {
        userId = "1093499946609762305"
      }
      var profileImage = items[index].user_image

      return (
        <ListItem
          button
          className={"InfiniteRow"}
          style={{ ...style, height: MyListHeight + "px" }}
        >
          <ListItemAvatar>
            <a
              href={"https://twitter.com/intent/user?user_id=" + userId}
              target={"_blank"}
            >
              <Avatar alt="Cindy Baker" src={profileImage} />
            </a>
          </ListItemAvatar>

          <ListItemText
            className={"InfiniteRowBody"}
            primary={regHashTag(regBody(items[index].body))}
          />
        </ListItem>
      )
    }
  }

  const itemCount = hasNextPage ? items.length + 1 : items.length

  const FixedList = ({ onItemsRendered, ref }) => {
    const win = window.getWindowSize()
    const height = win.height - HeaderHeight
    const itemHeight = MyListHeight
    return (
      <FixedSizeList
        className={"InfiniteList"}
        height={height}
        width={"100%"}
        itemCount={itemCount}
        itemSize={itemHeight}
        onItemsRendered={onItemsRendered}
        ref={ref}
      >
        {Row}
      </FixedSizeList>
    )
  }

  return (
    <InfiniteLoader
      className={styles.infinateList}
      isItemLoaded={index => index < items.length - 1}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      onScrollHandler={handleScroll}
    >
      {/* {({ onItemsRendered, ref }) => ( */}
      {/* <FixedSizeList */}
      {/* height={300} */}
      {/* width={"100%"} */}
      {/* itemCount={itemCount} */}
      {/* itemSize={100} */}
      {/* onItemsRendered={onItemsRendered} */}
      {/* ref={ref} */}
      {/* > */}
      {/* {Row} */}
      {/* </FixedSizeList> */}
      {/* )} */}
      {FixedList}
    </InfiniteLoader>
  )
}

export default InfinityList

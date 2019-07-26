import React from "react"
import styled from "styled-components"
import { FixedSizeList } from "react-window"
import InfiniteLoader from "react-window-infinite-loader"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import * as window from "../../constants/window"
import "../../App.css"
import StarBorder from "@material-ui/icons/StarBorder"
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon"

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

  const Row = ({ index, style, ref }) => {
    const itemLoading = index >= items.length

    if (itemLoading) {
      return <RowContainer style={{ ...style, backgroundColor: "grey" }} />
    } else {
      var userId = items[index].user_id
      if (Number(userId) === 0) {
        userId = "1093499946609762305"
      }

      return (
        <ListItem
          button
          className={"InfiniteRow"}
          style={{ ...style, height: MyListHeight + "px" }}
        >
          <a
            href={"https://twitter.com/intent/user?user_id=" + userId}
            target={"_blank"}
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
          </a>
          <ListItemText secondary={items[index].body} />
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

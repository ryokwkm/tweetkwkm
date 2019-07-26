import React from "react"
import styled from "styled-components"
import { FixedSizeList } from "react-window"
import InfiniteLoader from "react-window-infinite-loader"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { getWindowSize } from "../../constants/window"

const HeaderHeight = 50
const styles = theme => ({
  infinateList: {
    width: "100%",
    marginTop: HeaderHeight,
    // maxWidth: 360,
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
      return (
        <ListItem style={{ ...style, height: "50px" }}>
          <ListItemText secondary={items[index].body} />
        </ListItem>
      )
    }
  }

  const itemCount = hasNextPage ? items.length + 1 : items.length

  const FixedList = ({ onItemsRendered, ref }) => {
    const win = getWindowSize()
    const height = win.height - HeaderHeight
    return (
      <FixedSizeList
        height={height}
        width={"100%"}
        itemCount={itemCount}
        itemSize={100}
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

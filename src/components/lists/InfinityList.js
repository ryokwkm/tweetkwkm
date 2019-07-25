import React from "react"
import styled from "styled-components"
import { FixedSizeList } from "react-window"
import InfiniteLoader from "react-window-infinite-loader"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

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
          <ListItemText
            primary={items[index].head}
            secondary={items[index].body}
          />
        </ListItem>
      )
    }
  }

  const itemCount = hasNextPage ? items.length + 1 : items.length

  const FixedList = ({ onItemsRendered, ref }) => {
    return (
      <FixedSizeList
        height={300}
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

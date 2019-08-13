import React from "react"
import { FixedSizeList } from "react-window"
import InfiniteLoader from "react-window-infinite-loader"
import * as window from "../../constants/window"
import "../../scss/List.scss"
import ListBody from "./ListBody"

const HeaderHeight = 50
const styles = theme => ({
  infinateList: {
    width: "100%",
    marginTop: HeaderHeight,
    // backgroundColor: theme.palette.background.paper,
  },
})

const InfinityList = ({
  items,
  moreItemsLoading,
  hasNextPage,
  loadMoreItems,
  handleScroll,
}) => {
  const Row = ({ index, style, ref }) => {
    return <ListBody items={items} style={style} index={index} />
  }

  const itemCount = hasNextPage ? items.length + 1 : items.length

  const FixedList = ({ onItemsRendered, ref }) => {
    const win = window.getWindowSize()
    const height = win.height - HeaderHeight
    const itemHeight = window.getListHeight()
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
      {FixedList}
    </InfiniteLoader>
  )
}

export default InfinityList

import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles/index"
// import HideOnScroll from "../menus/HideOnScroll"
import ListHeadFate from "../fate/ListHeadFate"
import InfinityList from "../lists/InfinityList"
import * as PATH from "../../constants/common"
import MenuBar from "../menus/MenuBar"

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    maxWidth: 768,
    minWidth: 320,
    backgroundColor: theme.palette.background.paper,
    marginLeft: "auto",
    marginRight: "auto",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
})

class MainSportsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      parents: [],
      moreItemsLoading: false,
      page: 0,
      startIndex: 0,
      windowSize: {},
      isDetail: true,
      isScrollDown: false,
    }
  }

  componentDidMount() {}

  // itemsの中にキーワードが含まれているか確認
  getKeywordIndex(items, keyword) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].keyword && items[i].keyword === keyword) {
        return i
      }
    }
    return null
  }

  listPush(parents, article) {
    parents.push({
      keyword: article.keyword,
      favorite: 0,
      count: 1,
    })
  }

  addFavorite(parents, article) {
    var index = this.getKeywordIndex(parents, article.keyword)
    parents[index].favorite += Number(article.favorite)
    parents[index].count++
  }

  async loadMoreItems(startIndex, stopIndex) {
    const API_LIMIT = 23 // 本来２４にしたいが、goバッチ側でなぜか23が保存されていない
    // console.log("Loading...", this.state.items.length, startIndex)

    // 24以上は実行しない
    if (this.state.appId === 0 || this.state.page >= API_LIMIT) {
      return
    }
    this.setState({ moreItemsLoading: true })
    const response = await fetch(
      PATH.getUrl(
        "Fate/get?page=0&country=" + this.state.page + "&v=" + this.props.appId
      )
    )

    const data = await response.json()
    var items = []
    var parents = []

    console.log(data)
    // 親記事１件ごとにリアクションを挿入していく
    // parents[0] = key, favorite, date ...
    data.forEach(article => {
      if (parents.length === 0) {
        this.listPush(parents, article)
      }

      if (this.getKeywordIndex(parents, article.keyword) === null) {
        this.listPush(parents, article)
      } else {
        this.addFavorite(parents, article)
      }

      // if (!parents.includes(article.keyword)) {
      //   parents.push(article.keyword)
      // }
      items.push(article)
    })
    console.log("parents complete", parents)

    this.setState({
      moreItemsLoading: false,
      page: this.state.page + 1,
      items: this.state.items.concat(items),
      parents: this.state.parents.concat(parents),
      isScrollDown: false,
    })
  }

  handleScroll = startIndex => {
    if (this.state.startIndex < startIndex) {
      this.setState({ isScrollDown: true })
    }
    if (this.state.startIndex > startIndex) {
      this.setState({ isScrollDown: false })
    }
    this.setState({ startIndex: startIndex })
  }

  handleSetDetail = () => {
    this.setState({ isDetail: !this.state.isDetail })
  }

  render() {
    const { classes } = this.props
    if (this.props.appId === 0) return null

    return (
      <div className={classes.root}>
        {/* <HideOnScroll {...this.state}> */}
        {/*  <MenuBar /> */}
        {/* </HideOnScroll> */}
        <MenuBar />
        <ListHeadFate
          startIndex={this.state.startIndex}
          parents={this.state.parents}
          items={this.state.items}
          isDetail={this.state.isDetail}
          handleSetDetail={this.handleSetDetail}
          isScrollDown={this.state.isScrollDown}
          getKeywordIndex={this.getKeywordIndex}
        />
        <InfinityList
          items={this.state.items}
          hasNextPage={true}
          moreItemsLoading={this.state.moreItemsLoading}
          loadMoreItems={this.loadMoreItems.bind(this)}
          handleScroll={this.handleScroll.bind(this)}
          isDetail={this.state.isDetail}
        />
      </div>
    )
  }
}

MainSportsList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainSportsList)

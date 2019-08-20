import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles/index"
import HideOnScroll from "../HideOnScroll"
import ListHead from "./ListHead"
import InfinityList from "./InfinityList"
import * as PATH from "../../constants/common"
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import MenuBar from "../MenuBar"

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
    maxWidth: 600,
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
      isDetail: false,
      isScrollDown: false,
    }
  }

  async loadMoreItems(startIndex, stopIndex) {
    const API_LIMIT = 23 // 本来２４にしたいが、goバッチ側でなぜか23が保存されていない
    // console.log("Loading...", this.state.items.length, startIndex)

    // 24以上は実行しない
    if (this.state.page >= API_LIMIT) {
      return
    }
    this.setState({ moreItemsLoading: true })

    const response = await fetch(
      PATH.getUrl("?beforeDay=2&country=" + this.state.page)
    )
    const data = await response.json()
    var items = []
    var parents = []

    // 親記事１件ごとにリアクションを挿入していく
    data.forEach(parent => {
      const children = Object.assign({}, parent.reactions)
      parent.reactions = null
      items.push(parent)
      parents.push(parent)
      // リアクションごとの処理
      if (children) {
        for (const key in children) {
          items.push(children[key])
        }
      }
    })
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
    if (this.state.isScrollDown) {
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <HideOnScroll {...this.state}>
          <MenuBar />
        </HideOnScroll>
        <Toolbar />
        <ListHead
          startIndex={this.state.startIndex}
          parents={this.state.parents}
          items={this.state.items}
          isDetail={this.state.isDetail}
          handleSetDetail={this.handleSetDetail}
          isScrollDown={this.state.isScrollDown}
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

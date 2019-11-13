import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core"
import "../../scss/ListHead.scss"
import { formatDate } from "../../constants/common"
import Web from "@material-ui/icons/Web"
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp"
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown"
import Card from "@material-ui/core/Card/Card"

import CardHeader from "@material-ui/core/CardHeader/CardHeader"
import Avatar from "@material-ui/core/Avatar/Avatar"
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea"
import * as ListCommon from "./ListCommon"
// import ListHeadDetail from "./ListHeadDetail"

const styles = theme => ({
  articleHeader: {
    width: "100%",
    height: 30,
  },
})

class ListHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startIndex: this.props.startIndex,
      detailBody: "",
    }
    this.handleClickSecondIcon = this.handleClickSecondIcon.bind(this)
  }

  handleClickSecondIcon() {
    this.props.handleSetDetail()
  }

  render() {
    const article = this.props.items[this.props.startIndex] // 今表示中の記事

    if (article) {
      const parent = ListCommon.getParentByIndex(
        this.props.items,
        this.props.parents,
        this.props.startIndex
      )

      if (parent) {
        const created = formatDate(
          new Date(parent.created.replace(/-/g, "/")),
          "MM/dd HH:mm"
        )
        var isMenuClass = "ArticleHeader"
        // if (this.props.startIndex !== 0) {
        //   isMenuClass += " ArticleHeader-notMenu"
        // }
        return (
          <Card className={isMenuClass}>
            <CardActionArea onClick={this.handleClickSecondIcon}>
              <CardHeader
                avatar={
                  <a href={parent.url} target={"_blank"}>
                    <Avatar className={"avater"}>
                      <Web />
                    </Avatar>
                  </a>
                }
                action={<KeyboradArrowNode isDetail={this.props.isDetail} />}
                title={parent.head}
                subheader={created}
              />
            </CardActionArea>
          </Card>
        )
      }
    }
    return null
  }
}

function KeyboradArrowNode(isDetail) {
  if (!isDetail) {
    return <KeyboardArrowUp />
  } else {
    return <KeyboardArrowDown />
  }
}

ListHead.propTypes = {
  startIndex: PropTypes.number.isRequired,
  parents: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  isDetail: PropTypes.bool.isRequired,
  handleSetDetail: PropTypes.func.isRequired,
  isScrollDown: PropTypes.bool.isRequired,
}

export default withStyles(styles)(ListHead)

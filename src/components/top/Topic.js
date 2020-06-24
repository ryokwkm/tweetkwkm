import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core"
import "../../scss/TopPage.scss"
import * as ListCommon from "../lists/ListCommon"
import CardContent from "@material-ui/core/CardContent/CardContent"
import Typography from "@material-ui/core/Typography/Typography"
import Collapse from "@material-ui/core/Collapse/Collapse"
import CardMedia from "@material-ui/core/CardMedia/CardMedia"
import theme from "../../theme"

const styles = {
  articleHeader: {
    backgroundColor: theme.palette.background.paper,
  },
}

// 画像つきの記事
class Topic extends React.Component {
  constructor(props) {
    super(props)
    this.state = { startIndex: this.props.startIndex }
  }

  // 親記事本文
  getHeaderDetailBody() {
    const detail = ListCommon.getParentDetailByIndex(
      this.props.items,
      this.props.startIndex
    )
    if (detail) {
      return detail.body
    } else {
      return ""
    }
  }

  getHeaderDetailImage(parent) {
    var imgSrc = ListCommon.getMedia(parent)

    if (imgSrc != null) {
      return (
        <CardMedia className={"TopicHeader-Image"} image={imgSrc}>
          <div className={"TopicHeader-Text"}>{parent.body}</div>
        </CardMedia>
      )
    }
    return null
  }

  render() {
    const article = this.props.items[this.props.startIndex] // 今表示中の記事
    const { classes } = this.props
    if (article) {
      const parent = ListCommon.getParentByIndex(
        this.props.items,
        this.props.parents,
        this.props.startIndex
      )

      if (parent) {
        return (
          <div>
            <Collapse
              in={this.props.isDetail}
              timeout="auto"
              className={classes.articleHeader + " ArticleHeader-Collapse"}
              unmountOnExit
            >
              <div className={"ArticleHeader"}>
                <CardContent className={"ArticleHeader-Body"}>
                  {/* <Typography paragraph> */}
                  {/*  {this.getHeaderDetailBody()}…{" "} */}
                  {/*  <a href={parent.url} target={"_blank"} className={"link"}> */}
                  {/*    続きを読む */}
                  {/*  </a> */}
                  {/* </Typography> */}
                </CardContent>
                {this.getHeaderDetailImage(parent)}
              </div>
            </Collapse>
          </div>
        )
      }
    }
    return null
  }
}

Topic.propTypes = {
  startIndex: PropTypes.number.isRequired,
  parents: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  isDetail: PropTypes.bool.isRequired,
}

export default withStyles(styles)(Topic)

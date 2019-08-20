import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core"
import "../../scss/ListHead.scss"
import { formatDate } from "../../constants/common"
import Web from "@material-ui/icons/Web"
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp"
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown"
import Card from "@material-ui/core/Card/Card"
import CardContent from "@material-ui/core/CardContent/CardContent"
import Typography from "@material-ui/core/Typography/Typography"
import Collapse from "@material-ui/core/Collapse/Collapse"
import CardHeader from "@material-ui/core/CardHeader/CardHeader"
import Avatar from "@material-ui/core/Avatar/Avatar"
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea"

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

  getArticleByIndex() {
    const article = this.props.items[this.props.startIndex] // 今表示中の記事
    var parentId = article.parent_id
    if (Number(parentId) === 0) {
      parentId = article.id
    }

    const parents = this.props.parents
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

  getArticleDetailByIndex() {
    const article = this.props.items[this.props.startIndex] // 今表示中の記事
    var parentId = article.parent_id
    if (Number(parentId) === 0) {
      parentId = article.id
    }

    const items = this.props.items
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

  handleClickSecondIcon() {
    this.props.handleSetDetail()
    console.log(this.getArticleDetailByIndex())
  }

  KeyboradArrowNode() {
    if (this.props.isDetail) {
      return <KeyboardArrowUp />
    } else {
      return <KeyboardArrowDown />
    }
  }

  getHeaderDetail(url) {
    if (this.props.isDetail) {
      const detail = this.getArticleDetailByIndex()
      if (detail) {
        return detail.body
      }
    } else {
      return ""
    }
  }

  render() {
    const article = this.props.items[this.props.startIndex] // 今表示中の記事

    if (article) {
      const parent = this.getArticleByIndex()

      if (parent) {
        const created = formatDate(
          new Date(parent.created.replace(/-/g, "/")),
          "yyyy/MM/dd HH:mm"
        )
        const second = this.getHeaderDetail(parent.url)
        return (
          <Card className={"ArticleHeader"}>
            <CardActionArea onClick={this.handleClickSecondIcon}>
              <CardHeader
                avatar={
                  <a href={parent.url} target={"_blank"}>
                    <Avatar className={"avater"}>
                      <Web />
                    </Avatar>
                  </a>
                }
                // action={
                //   <IconButton
                //     aria-expanded={this.props.isDetail}
                //     aria-label="Show more"
                //   >
                //     {this.KeyboradArrowNode()}
                //   </IconButton>
                // }
                title={parent.head}
                subheader={created}
              />
              <Collapse in={this.props.isDetail} timeout="auto" unmountOnExit>
                <CardContent className={"ArticleHeader-Body"}>
                  <Typography paragraph>
                    {second}…{" "}
                    <a href={parent.url} target={"_blank"} className={"link"}>
                      続きを読む
                    </a>
                  </Typography>
                </CardContent>
              </Collapse>
            </CardActionArea>
          </Card>
        )

        // return (
        //   <ListItem button className={"ArticleHeader"}>
        //     <ListItemIcon>
        //       <a href={parent.url} target={"_blank"}>
        //         <Web />
        //       </a>
        //     </ListItemIcon>
        //
        //     <ListItemText
        //       className={"ArticleHeaderText"}
        //       primary={parent.head}
        //       secondary={second}
        //     />
        //     <IconButton
        //       edge="end"
        //       aria-label="comments"
        //       onClick={this.handleClickSecondIcon}
        //     >
        //       {this.KeyboradArrowNode()}
        //     </IconButton>
        //   </ListItem>
        // )
      }
    }
    return null
  }
}

ListHead.propTypes = {
  startIndex: PropTypes.number.isRequired,
  parents: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  isDetail: PropTypes.bool.isRequired,
  handleSetDetail: PropTypes.func.isRequired,
}

export default withStyles(styles)(ListHead)

import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem/ListItem"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import "../../App.css"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import InboxIcon from "@material-ui/icons/Inbox"

const styles = theme => ({
  articleHeader: {
    width: "100%",
    height: 30,
  },
})

class ListHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = { startIndex: this.props.startIndex }
  }

  getArticleById(parentId) {
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

  render() {
    // const { classes } = this.props
    const article = this.props.items[this.props.startIndex] // 今表示中の記事

    if (article) {
      var parentId = article.parent_id
      if (Number(parentId) === 0) {
        parentId = article.id
      }
      const parent = this.getArticleById(parentId)
      if (parent) {
        return (
          <ListItem className={"ArticleHeader"}>
            <a href={"https://twitter.com/sportskwkm/"} target={"_blank"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            </a>
            <a href={parent.url} target={"_blank"}>
              <ListItemText primary={parent.head} />
            </a>
          </ListItem>
        )
      }
    }
    return null
  }
}

ListHead.propTypes = {
  startIndex: PropTypes.number.isRequired,
  parents: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
}

export default withStyles(styles)(ListHead)

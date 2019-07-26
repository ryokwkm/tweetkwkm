import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core"
import ListItem from "@material-ui/core/ListItem/ListItem"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"

const styles = theme => ({
  articleHeader: {
    width: "100%",
    height: 50,
    // maxWidth: 360,
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
    console.log("check", parentId, parents, typeof parentId)
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
    const { classes } = this.props
    var title = ""
    var body = ""
    const article = this.props.items[this.props.startIndex] // 今表示中の記事

    if (article) {
      var parentId = article.parent_id
      if (Number(parentId) === 0) {
        parentId = article.id
      }
      const parent = this.getArticleById(parentId)
      if (parent) {
        title = parent.head
        body = parent.body
      }
    }
    return (
      <ListItem className={classes.articleHeader}>
        <ListItemText primary={title} secondary={body} />
      </ListItem>
    )
  }
}

ListHead.propTypes = {
  startIndex: PropTypes.number.isRequired,
  parents: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
}

export default withStyles(styles)(ListHead)

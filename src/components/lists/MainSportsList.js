import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles/index"

import ListItem from "@material-ui/core/ListItem/index"
import ListItemText from "@material-ui/core/ListItemText/index"
import StarBorder from "@material-ui/icons/StarBorder"
import VirtualizedTable from "./VirtualizedTable"

const styles = theme => ({
  root: {
    width: "100%",
    height: 400,
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
      lists: [],
    }
  }

  ChildListNode(article, reaction) {
    return (
      <ListItem key={`item-${article.id}-${reaction.id}`}>
        <StarBorder />
        <ListItemText primary={`Item ${reaction.body}`} />
        {/* <ListRecord /> */}
      </ListItem>
    )
  }

  // monstersを整形

  ListNode() {
    const { classes } = this.props
    console.log(this.props)
    return (
      <div className={classes.root}>
        <VirtualizedTable monsters={this.props.monsters} />
      </div>
    )
  }

  render() {
    const list = this.ListNode()
    return <div>{list}</div>
  }
}

MainSportsList.propTypes = {
  classes: PropTypes.object.isRequired,
  monsters: PropTypes.array.isRequired,
}

export default withStyles(styles)(MainSportsList)

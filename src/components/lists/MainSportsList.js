import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles/index"
import List from "@material-ui/core/List/index"
import ListItem from "@material-ui/core/ListItem/index"
import ListItemText from "@material-ui/core/ListItemText/index"
import ListSubheader from "@material-ui/core/ListSubheader/index"
import StarBorder from "@material-ui/icons/StarBorder"
// import ListRecord from "./lists/ListRecord"

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: window.parent.screen.height - 300,
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

  ListNode() {
    console.log(this.props.monsters)
    const { classes } = this.props
    return (
      <List className={classes.root} subheader={<li />}>
        {this.props.monsters.map(article => (
          <li key={`section-${article.id}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{`${article.head} ${article.id}`}</ListSubheader>
              {article.reactions.map(reaction =>
                this.ChildListNode(article, reaction)
              )}
            </ul>
          </li>
        ))}
      </List>
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

import React from "react"
import MainSportsList from "./lists/MainSportsList"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core"
import ListRouting from "./lists/ListRouting"

const styles = theme => ({
  parent: {
    backgroundColor: theme.palette.background.default,
  },
})

class ListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: "",
      appId: 1,
    }
  }

  render() {
    return (
      <div className={this.props.parent}>
        <ListRouting self={this} />
        <MainSportsList appId={this.state.appId} />
      </div>
    )
  }
}

ListIndex.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ListIndex)

import React from "react"
import MainSportsList from "./lists/MainSportsList"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core"
// import PropTypes from "prop-types"

const styles = theme => ({
  parent: {
    backgroundColor: theme.palette.background.default,
  },
})

class ListIndex extends React.Component {
  render() {
    return (
      <div className={this.props.parent}>
        <MainSportsList />
      </div>
    )
  }
}

ListIndex.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ListIndex)

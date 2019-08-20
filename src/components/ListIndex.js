import React from "react"
import MainSportsList from "./lists/MainSportsList"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core"
// import PropTypes from "prop-types"

const styles = theme => ({
  parent: {
    width: "100%",
    backgroundColor: theme.palette.background.default,
  },
})

class ListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { offset: 0, currentPosition: 0 }
  }

  render() {
    const classes = this.props.classes
    console.log(classes)
    return (
      <div className={"test"} className={classes.parent}>
        <MainSportsList />
      </div>
    )
  }
}

ListIndex.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ListIndex)

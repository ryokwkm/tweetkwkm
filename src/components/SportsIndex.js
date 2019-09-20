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
export const RouteContext = React.createContext()

class SportsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.setLang.bind(this)
    this.state = {
      lang: "",
      func: "",
      appId: 0,
      setLang: this.setLang,
    }
  }

  setLang(la) {
    // うまく行かない
    console.log("setlang", this)
    console.log(this.setState)
    this.setState({ lang: la })
  }

  render() {
    return (
      <RouteContext.Provider value={this.state}>
        <div className={this.props.parent}>
          <ListRouting self={this}>
            <MainSportsList appId={this.state.appId} />
          </ListRouting>
        </div>
      </RouteContext.Provider>
    )
  }
}

SportsIndex.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SportsIndex)

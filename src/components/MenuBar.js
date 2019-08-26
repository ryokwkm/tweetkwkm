import React from "react"
import AppBar from "@material-ui/core/AppBar/AppBar"
import { withStyles } from "@material-ui/core"
import MenuButton from "./MenuButton"

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
})

class MenuBar extends React.Component {
  render() {
    return (
      <AppBar>
        <MenuButton />
      </AppBar>
    )
  }
}

export default withStyles(styles)(MenuBar)

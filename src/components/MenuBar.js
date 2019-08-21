import React from "react"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"
import Typography from "@material-ui/core/Typography/Typography"
import AppBar from "@material-ui/core/AppBar/AppBar"
import { withStyles } from "@material-ui/core"
import "../scss/App.scss"

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
        <Toolbar className={"MenuBar"}>
          <MenuButton className={this.props.menuButton} />
          <Typography variant="h6">Scroll to Hide App Bar</Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(MenuBar)

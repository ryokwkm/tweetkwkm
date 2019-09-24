import React from "react"
import AppBar from "@material-ui/core/AppBar/AppBar"
import { withStyles } from "@material-ui/core"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
// import ListItem from "@material-ui/core/ListItem"
// import ListItemIcon from "@material-ui/core/ListItemIcon"
// import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import Drawer from "@material-ui/core/Drawer/Drawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import LangMenuButton from "./LangMenuButton"
import "../../scss/App.scss"
import ListItem from "@material-ui/core/ListItem/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import * as common from "../../constants/common"

const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
})

class MenuBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  toggleDrawer(side, open) {
    side = "left"
    return event => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return
      }

      this.setState({ left: open })
    }
  }

  drawerMenu(side) {
    const lang = common.getLocationLang()
    return (
      <div className={"drawer"} role="presentation">
        <List className={"langList"}>
          <a href={"/ent/" + lang}>
            <ListItem button key={"ent"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                className={"langText"}
                primary={common.getWord("ent")}
              />
            </ListItem>
          </a>

          <a href={"/sports/" + lang}>
            <ListItem button key={"sports"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                className={"langText"}
                primary={common.getWord("sports")}
              />
            </ListItem>
          </a>
        </List>

        <Divider />

        <List>
          <LangMenuButton />
        </List>
      </div>
    )
  }

  render() {
    return (
      <AppBar className={"menuBar"}>
        <div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={this.toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          {this.drawerMenu("left")}
        </Drawer>
      </AppBar>
    )
  }
}

export default withStyles(styles)(MenuBar)

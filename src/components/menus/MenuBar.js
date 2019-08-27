import React from "react"
import AppBar from "@material-ui/core/AppBar/AppBar"
import { withStyles } from "@material-ui/core"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import Drawer from "@material-ui/core/Drawer/Drawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import LangMenuButton from "./LangMenuButton"

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
    console.log("toggle", side, open)
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
    return (
      <div className={"drawer"} role="presentation">
        <List
          onClick={this.toggleDrawer(side, false)}
          onKeyDown={this.toggleDrawer(side, false)}
        >
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <List>
          <LangMenuButton />
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }

  render() {
    return (
      <AppBar>
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

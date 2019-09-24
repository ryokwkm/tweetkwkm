import React from "react"
import { RouteContext } from "../SportsIndex"
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import ListItem from "@material-ui/core/ListItem/ListItem"
import Menu from "@material-ui/core/Menu/Menu"
import MenuItem from "@material-ui/core/MenuItem/MenuItem"
import * as common from "../../constants/common"
import "../../scss/App.scss"

const langOption = [
  { lang: "ja", name: "日本語" },
  { lang: "en", name: "English" },
  { lang: "es", name: "Spanish" },
]

const ITEM_HEIGHT = 48

export default function LangMenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose(option, context) {
    console.log(context)
    if (option.lang !== context.lang) {
      // 別の言語が選択されたためリダイレクトする
      // console.log(this)
    }
    setAnchorEl(null)
  }

  return (
    <RouteContext.Consumer>
      {context => {
        // console.log(context)
        return (
          <React.Fragment>
            <ListItem
              button
              key={context.lang}
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={common.getWord("language")} />
            </ListItem>
            <Menu
              id="long-menu"
              className={"langList"}
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200,
                },
              }}
            >
              {langOption.map(option => (
                <a
                  href={"/" + context.func + "/" + option.lang}
                  key={option.lang}
                >
                  <MenuItem
                    className={"langText"}
                    key={option.lang}
                    selected={option.lang === context.lang}
                    onClick={() => handleClose(option, context)}
                  >
                    {option.name}
                  </MenuItem>
                </a>
              ))}
            </Menu>
          </React.Fragment>
        )
      }}
    </RouteContext.Consumer>
  )
}

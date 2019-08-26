import React from "react"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from "@material-ui/icons/Menu"
import { RouteContext } from "./ListIndex"

const langOption = [
  { lang: "ja", name: "日本語" },
  { lang: "en", name: "English" },
  { lang: "es", name: "Spanish" },
]

const ITEM_HEIGHT = 48

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose(option, context) {
    console.log(context)
    if (option.lang !== context.lang) {
      context.setLang()
    }
    setAnchorEl(null)
  }

  return (
    <RouteContext.Consumer>
      {context => {
        return (
          <div>
            <IconButton
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="long-menu"
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
                <MenuItem
                  key={option.lang}
                  selected={option.lang === context.lang}
                  onClick={() => handleClose(option, context)}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </div>
        )
      }}
    </RouteContext.Consumer>
  )
}

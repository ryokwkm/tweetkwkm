import React from "react"
import PropTypes from "prop-types"
import Slide from "@material-ui/core/Slide"
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar/Toolbar"

export default function HideOnScroll(props) {
  const { children, isScrollDown } = props
  const trigger = isScrollDown

  return (
    <React.Fragment>
      <CssBaseline />
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
      <Toolbar />
    </React.Fragment>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func,
  isScrollDown: PropTypes.bool.isRequired,
}

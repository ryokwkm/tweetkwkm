import React from "react"
import PropTypes from "prop-types"
import Slide from "@material-ui/core/Slide"

export default function HideOnScroll(props) {
  const { children, isScrollDown } = props
  const trigger = isScrollDown

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func,
  isScrollDown: PropTypes.bool.isRequired,
}

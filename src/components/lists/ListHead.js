import React from "react"
import PropTypes from "prop-types"

class ListHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = { startIndex: this.props.startIndex }
  }

  render() {
    return <div>{this.props.startIndex}</div>
  }
}

ListHead.propTypes = {
  startIndex: PropTypes.number.isRequired,
}

export default ListHead

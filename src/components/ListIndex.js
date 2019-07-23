import React from "react"
import MainSportsList from "./lists/MainSportsList"
import PropTypes from "prop-types"

class ListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { offset: 0, currentPosition: 0 }
  }

  render() {
    return (
      <div>
        <MainSportsList monsters={this.props.monsters} />
      </div>
    )
  }
}

ListIndex.propTypes = {
  monsters: PropTypes.array.isRequired,
}

export default ListIndex

import React from "react"
import MainSportsList from "./lists/MainSportsList"
import PropTypes from "prop-types"
import AdSense from "react-adsense"

class ListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { offset: 0, currentPosition: 0 }
  }

  render() {
    return (
      <div>
        <MainSportsList monsters={this.props.monsters} />
        <AdSense.Google
          client="ca-pub-7387197978271555"
          className="adsbygoogle"
          format="auto"
          style={{ display: "block" }}
        />
      </div>
    )
  }
}

ListIndex.propTypes = {
  monsters: PropTypes.array.isRequired,
}

export default ListIndex

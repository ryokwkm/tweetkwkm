import React from "react"
import ListIndex from "./ListIndex"
import * as PATH from "../constants/common"
class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      error: null,
      items: [],
    }
  }

  componentDidMount() {
    fetch(PATH.getUrl("?country=13"))
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error,
          })
        }
      )
  }

  render() {
    return <ListIndex monsters={this.state.items} />
  }
}

export default Top

import React from "react"
import ListIndex from "./ListIndex"
import * as PATH from "../constants/common"
class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      error: null,
      monsters: [],
    }
  }

  componentDidMount() {
    fetch(PATH.getUrl("?country=13"))
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            monsters: result,
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

  AjaxTestNode() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {this.state.monsters.map(monster => (
            <li key={monster.id}>
              {monster.name} {monster.hp}
            </li>
          ))}
        </ul>
      )
    }
  }

  render() {
    return <ListIndex monsters={this.state.monsters} />
  }
}

export default Top

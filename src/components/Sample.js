import React, { Component } from "react"
import Button from "@material-ui/core/Button/index"
import "../scss/App.scss"

class Sample extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <Button variant="contained" color="secondary">
            Hello World!
          </Button>
        </header>
      </div>
    )
  }
}

export default Sample

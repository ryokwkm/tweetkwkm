import React from "react"
import Top from "./components/Top"
import ReactGA from "react-ga"

// GAのみ
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { pathname } = this.props.location
    ReactGA.set({ page: pathname })
    ReactGA.pageview(pathname)
  }

  render() {
    return <Top />
  }
}

export default App

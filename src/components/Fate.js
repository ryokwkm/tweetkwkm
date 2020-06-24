import React from "react"
import ReactGA from "react-ga"
import ListRouting from "./lists/ListRouting"
import { withStyles } from "@material-ui/core"

export const RouteContext = React.createContext()

const styles = theme => ({
  parent: {
    backgroundColor: theme.palette.background.default,
  },
})

// 大枠のデザイン。広告もここでやる
class Fate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: "",
      func: "",
      appId: 0,
    }
  }

  componentDidMount() {
    const { pathname } = this.props.location
    ReactGA.set({ page: pathname })
    ReactGA.pageview(pathname)
  }

  render() {
    return (
      <div className={"st-Container"}>
        {/* <SportsIndex /> */}
        <RouteContext.Provider value={this.state}>
          <div className={this.props.parent}>
            <ListRouting self={this}>
              {/* <MainFateList appId={this.state.appId} /> */}
            </ListRouting>
          </div>
        </RouteContext.Provider>
        {/* <AdSense.Google */}
        {/*  client="ca-pub-7387197978271555" */}
        {/*  className="adsbygoogle" */}
        {/*  slot="xxxx" */}
        {/*  format="auto" */}
        {/*  style={{ display: "block" }} */}
        {/* /> */}
      </div>
    )
  }
}

export default withStyles(styles)(Fate)

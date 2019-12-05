import React from "react"
// import SportsIndex, { RouteContext } from "./SportsIndex"
// import AdSense from "react-adsense"
import ReactGA from "react-ga"
import ListRouting from "./lists/ListRouting"
import MainSportsList from "./lists/MainSportsList"
import { withStyles } from "@material-ui/core"

export const RouteContext = React.createContext()

const styles = theme => ({
  parent: {
    backgroundColor: theme.palette.background.default,
  },
})

// 大枠のデザイン。広告もここでやる
class Sports extends React.Component {
  constructor(props) {
    super(props)
    this.setLang.bind(this)
    this.state = {
      lang: "",
      func: "",
      appId: 0,
      setLang: this.setLang,
    }
  }

  componentDidMount() {
    const { pathname } = this.props.location
    ReactGA.set({ page: pathname })
    ReactGA.pageview(pathname)
  }

  setLang(la) {
    // うまく行かない
    console.log("setlang", this)
    console.log(this.setState)
    this.setState({ lang: la })
  }

  render() {
    return (
      <div className={"st-Container"}>
        {/* <SportsIndex /> */}
        <RouteContext.Provider value={this.state}>
          <div className={this.props.parent}>
            <ListRouting self={this}>
              <MainSportsList appId={this.state.appId} />
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

export default withStyles(styles)(Sports)

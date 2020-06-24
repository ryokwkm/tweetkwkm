import React from "react"
// import SportsIndex, { RouteContext } from "./SportsIndex"
// import AdSense from "react-adsense"
import ReactGA from "react-ga"
// import ListRouting from "./lists/ListRouting"
// import MainSportsList from "./lists/MainSportsList"
import { withStyles } from "@material-ui/core"
import TopPage from "./top/TopPage"
import * as common from "../constants/common"

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
    this.setLang = this.setLang.bind(this)
    this.setApplicationData = this.setApplicationData.bind(this)

    this.state = {
      lang: "",
      func: "",
      appId: 0,
      setLang: this.setLang,
    }
    // 言語チェック
    const params = this.props.location.pathname.split("/")

    if (params[2] && this.checkLang(params[2])) {
    } else {
      this.props.history.push("/sports/ja/")
    }

    this.state = this.setApplicationData()
    console.log(this.state)
  }

  checkLang(param) {
    const langs = ["ja", "en", "es"]
    var ok = false
    langs.forEach(lang => {
      if (param === lang) {
        ok = true
      }
    })
    return ok
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

  setApplicationData() {
    // const params = this.props.location.pathname.split("/")
    const funcName = common.getLocationFunc()
    const lang = common.getLocationLang()

    var appId = 0
    if (funcName === "sports") {
      if (lang === "ja") {
        appId = 1
      } else if (lang === "en") {
        appId = 12
      } else if (lang === "es") {
        appId = 5
      }
    } else if (funcName === "ent") {
      if (lang === "ja") {
        appId = 8
      } else if (lang === "en") {
        appId = 9
      } else if (lang === "es") {
        appId = 11
      }
    } else if (funcName === "fate") {
      appId = 7
    }
    return { lang: lang, func: funcName, appId: appId }
  }

  render() {
    console.log(this.state)
    return (
      <div className={"st-Container"}>
        {/* <SportsIndex /> */}
        <RouteContext.Provider value={this.state}>
          <div className={this.props.parent}>
            <TopPage appId={this.state.appId} />
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

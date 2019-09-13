import React from "react"
import { withRouter } from "react-router"

// ListのRoutingのみ行う
class ListRouting extends React.Component {
  constructor(props) {
    super(props)

    // 言語チェック
    const params = this.props.location.pathname.split("/")
    if (params[2] && this.checkLang(params[2])) {
    } else {
      this.changeLangDefault()
    }

    this.setApplicationData()

    // if (params[3] && !isNaN(params[3]) && params[3] > 0 && params[3] <= 24) {
    //   this.props.self.setState({ page: params[3] })
    // }
  }

  componentDidMount() {}

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

  setApplicationData() {
    const params = this.props.location.pathname.split("/")
    const funcName = params[1]
    const lang = params[2]

    if (funcName === "sports") {
      if (lang === "es") {
        this.props.self.setState({ appId: 5 })
      } else if (lang === "ja") {
        this.props.self.setState({ appId: 1 })
      } else if (lang === "en") {
        this.props.self.setState({ appId: 11 })
      }
    } else if (funcName === "fate") {
      this.props.self.setState({ appId: 7 })
    }
    this.props.self.setState({ lang: lang, func: funcName })
  }

  changeLangDefault() {
    this.props.history.push("/sports/ja/")
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ListRouting)

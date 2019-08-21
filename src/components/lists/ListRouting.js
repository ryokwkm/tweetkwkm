import React from "react"
import { withRouter } from "react-router"

// ListのRoutingのみ行う
class ListRouting extends React.Component {
  constructor(props) {
    super(props)

    // 言語チェック
    const params = this.props.location.pathname.split("/")
    if (params[2] && this.checkLang(params[2])) {
      this.setAppId(params[1], params[2])
    } else {
      this.changeLangDefault()
    }
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

  setAppId(funcName, lang) {
    if (funcName === "sports" && lang === "es") {
      this.props.self.setState({ appId: 5 })
    } else if (funcName === "sports" && lang === "ja") {
      this.props.self.setState({ appId: 1 })
    }
  }

  changeStartIndex() {}

  changeLangDefault() {
    this.props.history.push("/sports/ja/")
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ListRouting)
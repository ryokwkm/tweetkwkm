import React from "react"
import { withRouter } from "react-router"

// ListのRoutingのみ行う
class ListRouting extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    // 言語チェック
    console.log(this.props)
    const params = this.props.location.pathname.split("/")
    if (params[2] && this.checkLang(params[2])) {
    } else {
      this.changeLangDefault()
    }
    // if (params[3] && !isNaN(params[3]) && params[3] > 0 && params[3] <= 24) {
    //   this.props.self.setState({ page: params[3] })
    // }
  }

  checkLang(param) {
    const langs = ["ja", "en"]
    var ok = false
    langs.forEach(lang => {
      if (param === lang) {
        ok = true
      }
    })
    return ok
  }

  changeStartIndex() {}

  changeLangDefault() {
    this.props.history.push("/sports/ja/")
  }

  render() {
    this.changeStartIndex()
    return null
  }
}

export default withRouter(ListRouting)

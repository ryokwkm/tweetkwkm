import React from "react"
import SportsIndex from "./SportsIndex"
import AdSense from "react-adsense"
import ReactGA from "react-ga"

// 大枠のデザイン。広告もここでやる
class Sports extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log("props", this.props)
  }

  componentDidMount() {
    const { pathname } = this.props.location
    ReactGA.set({ page: pathname })
    ReactGA.pageview(pathname)
  }

  render() {
    return (
      <div className={"st-Container"}>
        <SportsIndex />
        <AdSense.Google
          client="ca-pub-7387197978271555"
          className="adsbygoogle"
          slot="xxxx"
          format="auto"
          style={{ display: "block" }}
        />
      </div>
    )
  }
}

export default Sports

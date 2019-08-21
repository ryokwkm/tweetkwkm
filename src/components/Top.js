import React from "react"
import ListIndex from "./ListIndex"
import AdSense from "react-adsense"

// 大枠のデザイン。広告もここでやる
class Top extends React.Component {
  render() {
    return (
      <div className={"st-Container"}>
        <ListIndex />
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

export default Top

import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import Sports from "./components/Sports"
import Fate from "./components/Fate"
import theme from "./theme"
import * as serviceWorker from "./serviceWorker"
import { Router, Route } from "react-router-dom"
import ReactGA from "react-ga"
import { createBrowserHistory } from "history"
// import Top from "./components/Top"

/**
 * gaの設定
 * routerの設定
 * @ryokwkm
 */
const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)

ReactGA.initialize("UA-15142129-4")
const history = createBrowserHistory()
history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
})

// ReactDOM.render(<App />, document.getElementById("root"))
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {/* <App /> */}
    <Router history={history}>
      <div>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/sports(/?)" component={Sports} />
        <Route path="/ent(/?)" component={Sports} />
        <Route path="/fate(/?)" component={Fate} />
        <Route exact path="/" component={Sports} />
      </div>
    </Router>
  </ThemeProvider>,
  document.querySelector("#root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

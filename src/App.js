import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Top from "./components/Top"
import ReactGA from "react-ga"
import createBrowserHistory from "history/createBrowserHistory"

ReactGA.initialize("UA-15142129-4")
const history = createBrowserHistory()
history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
})

const App = () => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={Top} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
    </div>
  </Router>
)

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

export default App

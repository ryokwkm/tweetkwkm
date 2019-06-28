import React from "react"
// import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Pagination from "material-ui-flat-pagination"

const theme = createMuiTheme()

class Pager extends React.Component {
  constructor(props) {
    super(props)
    this.state = { offset: 0 }
  }

  handleClick(offset) {
    this.setState({ offset })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={100}
          onClick={(e, offset) => this.handleClick(offset)}
        />
      </MuiThemeProvider>
    )
  }
}

// Pager.propTypes = {
//   // monsters: PropTypes.array.isRequired,
// }

export default Pager

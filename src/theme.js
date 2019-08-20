import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
// https://material-ui.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#000",
    },
  },
  typography: {
    fontSize: 11,
    fontWeight: 700,
  },
})

export default theme

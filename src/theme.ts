import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#116466",
    },
    secondary: {
      main: "#2F455C",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#2F455C",
      paper: "#EDE1D4",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#2F455C",
          //no box shadow
          boxShadow: "none",
          color: "#D5E0EC",
        },
      },
    },
  },
});

export default theme;
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1DCDFE',
    },
    secondary: {
      main: '#2F455C',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#2F455C',
      paper: '#EDE1D4'
    }
  },
});

export default theme; 
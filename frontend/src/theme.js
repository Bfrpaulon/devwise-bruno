import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#FFC107',
    },
    text: {
      primary: '#333333',
      secondary: '#5c5c5c',
    },
    background: {
      default: '#F5F5F5',
      paper: '#ebebeb',
    },
  },
});

export default theme;

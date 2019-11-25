import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#B3E5FC',
      main: '#03A9F4',
      dark: '#0288D1',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#BDBDBD',
      main: '#9E9E9E',
      dark: '#757575',
      contrastText: '#212121',
    },
  },
});

export default theme;

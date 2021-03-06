import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ("Nanum Myeongjo"),
  },
});

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);

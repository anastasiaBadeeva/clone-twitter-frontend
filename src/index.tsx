import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import App from './App';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

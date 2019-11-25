import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import theme from './styles/theme';

const store: Store = configureStore();

const jsx = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

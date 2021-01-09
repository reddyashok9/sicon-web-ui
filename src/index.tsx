/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import { ThroughProvider } from 'react-through';
// Use consistent styling
import 'sanitize.css/sanitize.css';

// Import root app
import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

// Initialize languages
import './locales/i18n';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#05AC72',
      contrastText: '#fff',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#056644',
    },
  },
  typography: {
    fontFamily: ['Mulish', 'Roboto'].join(','),
  },
});

ReactDOM.render(
  <ThroughProvider>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HelmetProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </HelmetProvider>
      </Provider>
    </ThemeProvider>
  </ThroughProvider>,
  MOUNT_NODE,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

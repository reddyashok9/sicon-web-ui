/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Articles } from './containers/Articles';
import { ReactComponent as ReactLogo } from '../logosidebar.svg';
import AppMenu from './AppMenu';
import { Accounts } from './containers/Accounts';
import { Login } from './containers/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { Typography } from '@material-ui/core';
import { Breadcrumbs } from 'react-breadcrumbs-dynamic';

export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <main>
        <div className="sideBar">
          <div className="logoContainer">
            <ReactLogo />
          </div>
          <AppMenu />
        </div>
        <div className="mainContainer">
          <header>
            <div className="headerLeft">
              <Breadcrumbs
                separator={<b> {`>`} </b>}
                item={NavLink}
                finalItem={'b'}
                finalProps={{
                  style: { color: '#05AC72' },
                }}
              />
            </div>
            <div className="headerRight">
              <div className="profileInfo">
                <div className="nameContainer">
                  <Typography variant="body2">Ashok Reddy</Typography>
                  <Typography variant="caption">Super Admin</Typography>
                </div>
                <div className="profilePic">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </header>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/articles" component={Articles} />
            <PrivateRoute exact path="/accounts" component={Accounts} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </main>
      <GlobalStyle />
    </BrowserRouter>
  );
}

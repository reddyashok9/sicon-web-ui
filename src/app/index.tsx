/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Articles } from './containers/Articles';
import { ReactComponent as ReactLogo } from '../logosidebar.svg';
import AppMenu from './AppMenu';
import { Accounts } from './containers/Accounts';

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
            <div className="headerLeft">Dashboard</div>
            <div className="headerRight"></div>
          </header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/accounts" component={Accounts} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </main>
      <GlobalStyle />
    </BrowserRouter>
  );
}

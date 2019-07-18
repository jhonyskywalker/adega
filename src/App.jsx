import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Loadable from 'react-loadable';
import { ApolloProvider } from 'react-apollo';

import GlobalStyle from './designSystem/globalStyle';
import configureStore, { history } from './redux-flow';
import gqlClient from './config/api/gqlClient';

const config = configureStore();

export const Home = Loadable({
  loader: () => import('containers/Pages/Home'),
  loading: () => null,
});

export const Products = Loadable({
  loader: () => import('containers/Pages/Products'),
  loading: () => null,
});

export default () => (
  <Fragment>
    <GlobalStyle />
    <Provider store={config}>
      <ApolloProvider client={gqlClient}>
        <ConnectedRouter history={history}>
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products/:id" component={Products} />
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </>
        </ConnectedRouter>
      </ApolloProvider>
    </Provider>
  </Fragment>
);

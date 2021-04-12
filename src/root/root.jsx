import fp from 'lodash/fp';
import React from 'react';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';
import Routes from './config/routes';


class Root extends React.Component {

  render() {

    return (
      <HashRouter>
        <Switch>
          {fp.map(route => <Route key={route.key} {...route} />, Routes)}
        </Switch>
      </HashRouter>
    );
  }
}

export default Root;

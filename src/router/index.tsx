import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'layout';
import Home from 'pages/Home';
import Todos from 'pages/Todos';
import NotFound from 'pages/NotFound';

const RouteWithLayout = (Route: () => JSX.Element, name: String): JSX.Element => (
  <Layout route={name}>
    <Route />
  </Layout>
);

const Routing = (): JSX.Element => {
  return (
    <Router>
        <Switch>
          <Route path={'(/home|/)'} component={() => RouteWithLayout(Home, 'home')} />
          <Route path={`/todos`} component={() => RouteWithLayout(Todos, 'todo')} />
          <Route path={`*`} component={() => RouteWithLayout(NotFound, 'notFound')} />
        </Switch>
    </Router>
  );
}

export default Routing;
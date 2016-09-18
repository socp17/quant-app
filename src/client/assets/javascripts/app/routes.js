import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Grid from 'features/layouts/components/Grid';
import Layout from 'features/layouts/components/Layout';

import App from './App';
import NotFoundView from 'components/NotFound';

const IndexView = () => (
  <Grid style={{ maxWidth: '90%', margin: '15px auto' }}>
    <Layout id={'graph1'}/>
  </Grid>
);

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexView} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);

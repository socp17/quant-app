import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import GraphContainer from 'features/graphs/components/GraphContainer';

import App from './App';
import NotFoundView from 'components/NotFound';

const IndexView = () => (
  <Grid>
    <Row>
      <Col sm={12}>
        <GraphContainer />
      </Col>
    </Row>
  </Grid>
);

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexView} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);

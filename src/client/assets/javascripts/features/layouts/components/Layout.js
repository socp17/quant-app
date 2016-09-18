import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { get } from 'lodash';
import GraphContainer from 'features/graphs/components/GraphContainer';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Grid from './Grid';
import Input from 'features/inputs/components/Input';
import moment from 'moment';

function selector(state) {
  return {
    x: get(state, ['inputs', 'graph1.x'], 'key_stats.price_to_book'),
    y: get(state, ['inputs', 'graph1.y'], 'key_stats.price_to_earnings_growth'),
    z: get(state, ['inputs', 'graph1.z']),
  }
}

@connect(selector)
class Layout extends Component {
  static propTypes = {}

  render() {
    const { x, y, z } = this.props;
    const graphProps = {
      x, y, z,
      start: moment().startOf('day').subtract(365, 'days').format('x'),
      end: moment().endOf('day').format('x'),
    };

    const options = [{
      value: 'key_stats.price_to_book',
    }, {
      value: 'key_stats.price_to_earnings_growth',
    }, {
      value: 'price_histories.price',
    }]

    return (
      <Card style={{ padding: '30px 20px' }}>
        <GraphContainer {...graphProps} />
        <Grid style={{ width: '90%', margin: '0 auto' }}>
          <Input
            id="graph1.x"
            type="select"
            label="x:"
            options={options}
          />
          <Input
            id="graph1.y"
            type="select"
            label="y:"
            options={options}
          />
          <Input
            id="graph1.z"
            type="select"
            label="z:"
            options={[{ label: 'none', value: undefined }].concat(options)}
          />
        </Grid>
      </Card>
    )
  }
}

export default Layout;

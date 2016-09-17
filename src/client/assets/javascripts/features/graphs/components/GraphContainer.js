import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Graph from './Graph';
import { get } from 'lodash';
import { fetchScatter } from 'features/graphs/actions';

function selectors(state) {
  return {
    data: get(state, 'graphs.1.data', {}),
  }
}

function actionsToProps(dispatch) {
  return {
    fetchGraph: () => {
      dispatch(fetchScatter({
        x: 'price_to_book',
        y: 'price_to_earnings',
        z: 'return',
      }))
    }
  }
}

@connect(selectors, actionsToProps)
class GraphContainer extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    fetchGraph: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.fetchGraph();
  }

  render() {
    return (
      <Graph data={[this.props.data]} />
    )
  }
}

export default GraphContainer;

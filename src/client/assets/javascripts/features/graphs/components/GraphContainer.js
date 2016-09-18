import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Graph from './Graph';
import { get, first } from 'lodash';
import { fetchScatter } from 'features/graphs/actions';
import moment from 'moment';

function sign(x) {
  if (x > 0) {
    return '+';
  } else if (x === 0) {
    return '';
  } else {
    return '-';
  }
}

function selectors(state) {
  return {
    data: get(state, 'graphs.1.data', {}),
    isFetching: get(state, 'graphs.1.isFetching', true),
    isInvalidated: get(state, 'graphs.1.isInvalidated', false),
  }
}

function actionsToProps(dispatch) {
  return {
    fetchGraph: ({ x, y, z, start, end }) => {
      dispatch(fetchScatter({ x, y, z, start, end }))
    }
  }
}

@connect(selectors, actionsToProps)
class GraphContainer extends Component {
  static propTypes = {
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    z: PropTypes.string,
    data: PropTypes.object.isRequired,
    fetchGraph: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.fetchGraph();
  }

  componentDidUpdate() {
    if (!this.props.isFetching && this.props.isInvalidated) {
      this.fetchGraph();
    }
  }

  fetchGraph = () => {
    this.props.fetchGraph(this.props);
  }

  graphProps() {
    const { data } = this.props;
    const { x, y, z, tickers } = data;

    if (first(z) !== null) {
      return {
        data: [{
          x,
          y,
          type: 'scatter',
          mode: 'markers',
          text: tickers && tickers.map((t, i) => `ticker: ${t}<br>change: ${sign(Number(z[i]))}${Math.abs(z[i]).toFixed(3)}%`),
          marker: {
            size: z && z.map((x) => Math.abs(x) * 3 + 3),
            color: z && z.map((x) => (x > 0 ? 'green' : 'red')),
          },
        }],
      };
    }

    return {
      data: [{
        x,
        y,
        type: 'scatter',
        mode: 'markers',
        text: tickers && tickers.map((t, i) => `ticker: ${t}`),
        marker: {
          size: 5,
        },
      }],
    };
  }

  render() {
    return (
      <Graph {...this.graphProps()} />
    )
  }
}

export default GraphContainer;

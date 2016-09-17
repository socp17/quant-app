import React, { Component, PropTypes } from 'react';
import Plotly from 'common/plotly';
import { cloneDeep } from 'lodash';

export default class Graph extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  state = {}

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
    this.plot(this.props.data);
  }

  componentDidUpdate() {
    this.plot(this.props.data);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize = () => {
    this.setState({ updated: true });
  }

  plot(data) {
    const layout = {
      margin: {
        t: 0,
      },
    };

    const options = {
      displayModeBar: false,
    };

    Plotly.newPlot(this.node, cloneDeep(data), layout, options);
  }

  render() {
    return (
      <div ref={(node) => this.node = node} />
    );
  }
}


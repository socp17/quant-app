import React, { Component, PropTypes } from 'react';
import Plotly from 'common/plotly';

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
    console.info('updating!');
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
        t: 20,
        b: 20,
        l: 40,
        r: 20,
      },
    };

    const options = {
      // displayModeBar: false,
    };

    Plotly.newPlot(this.node, data, layout, options);
  }

  render() {
    return (
      <div
        ref={(node) => this.node = node}
        style={{ height: 400 }}
      />
    );
  }
}


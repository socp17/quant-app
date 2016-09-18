import React, { Component, PropTypes } from 'react'
import ReactGridLayout from 'react-grid-layout';

class Grid extends Component {
  static propTypes = {}

  render() {
    const { children } = this.props;
    const style = {
      container: {
        ...this.props.style,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      },
      node: {
        alignItems: 'stretch',
        minWidth: 300,
        flexGrow: '1',
        flexShrink: '0',
        flexBasis: '0',
      },
    };

    return (
      <div style={style.container}>
        {React.Children.map(children, (child, i) => (
          <div style={style.node}>
            {child}
          </div>
        ))}
      </div>
    )
  }
}

export default Grid;

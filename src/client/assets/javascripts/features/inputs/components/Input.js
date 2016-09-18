import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { setInputValue } from 'features/inputs/actions';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function select(state, ownProps) {
  const value = get(state, ['inputs', ownProps.id])
  return {
    value,
  };
}

function actions(dispatch) {
  return {
    onChange: (fieldId, value) => {
      dispatch(setInputValue(fieldId, value));
    },
  };
}

@connect(select, actions)
class Input extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    type: PropTypes.string,

    // Provided by store
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }

  defaultProps = {
    type: 'text',
  }

  handleChange = (event, index, value) => {
    this.props.onChange(this.props.id, value)
  }

  handleSelect = (event, index, value) => {
    this.props.onChange(this.props.id, value)
  }

  render() {
    const { id, label, type, placeholder, options, value } = this.props
    switch (type) {
      case 'text': return (
        null
      );

      case 'select': return (
        <SelectField
          value={this.props.value}
          onChange={this.handleSelect}
          style={{ width: '90%' }}
          floatingLabelText={label}
          floatingLabelFixed
        >
          {options.map(o => (
            <MenuItem key={o.value} value={o.value} primaryText={o.label || o.value} />
          ))}
        </SelectField>
      );

      default: return null;
    }
  }
}

export default Input;

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { default as graphs } from 'features/graphs/reducer';
import { default as inputs } from 'features/inputs/reducer';

export default combineReducers({
  routing,
  graphs,
  inputs,
});

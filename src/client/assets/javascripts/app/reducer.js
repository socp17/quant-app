import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { default as graphs } from 'features/graphs/reducer';

export default combineReducers({
  routing,
  graphs,
});

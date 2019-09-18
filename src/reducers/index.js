import { combineReducers } from 'redux';
import characterGroupOne from './characterGroupOne';
import characterGroupTwo from './characterGroupTwo';

const rootReducer = combineReducers({
  characterGroupOne,
  characterGroupTwo,
});

export default rootReducer;

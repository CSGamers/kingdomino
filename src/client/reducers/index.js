import { combineReducers } from 'redux';

// import all reducers here
import gameReducer from './game';
import authReducer from './authentication';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  game: gameReducer,
  auth: authReducer
});

// make the combined reducers available for import
export default reducers;
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import stations from './stations';
import trains from './trains';

const rootReducer = combineReducers({stations, trains, routing: routerReducer});

export default rootReducer;

import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import components
import App from './components/App';
import Single from './components/Single';
import StationGrid from './components/StationGrid';

// Import react router components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={StationGrid}></IndexRoute>
        <Route path="/view/:stationCode" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import Welcome from './Pages/Welcome/Welcome';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
      <Route path="About" component={About} />
      <Route path="Contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
  ,document.getElementById('root')
);

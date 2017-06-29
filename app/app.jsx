var React = require('react');
var ReactDOM = require('react-dom');
var {IndexRoute, Routes} = require('react-router');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import TodoLogin from 'TodoLogin';
import TodoApp from 'TodoApp';

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={TodoLogin}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

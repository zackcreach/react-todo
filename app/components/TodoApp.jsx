var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Drink the drink tho'
        }, {
          id: 4,
          text: 'You\'ll drink the drink though'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
  },
  render: function() {
    var {todos, text} = this.state;

    return(
      <div>
        // todos and onAdd are props from other components
        <TodoList todos={todos}/>
        <AddTodo onAdd={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;

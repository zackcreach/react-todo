var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return(
          // The key property is necessary to keep track of all items, ... grabs all the props in todo
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;

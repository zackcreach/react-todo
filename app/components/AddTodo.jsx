var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var textStr = this.refs.text.value;

    if (textStr.length == 0) {
      this.refs.text.focus();
    } else {
      this.refs.text.value = '';
      this.props.onAdd(textStr);
    }
  },
  render: function() {
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="text" className="" placeholder="What is it you want to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;

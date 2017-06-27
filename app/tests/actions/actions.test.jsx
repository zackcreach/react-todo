var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should toggle all via show completed', () => {
    var action = {
      type: 'TODO_SHOW_COMPLETD'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toExist(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '33'
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
